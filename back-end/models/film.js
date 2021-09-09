const { query } = require("../db");

async function getAllFilms() {
  const data = await query("SELECT * FROM films;");
  return data.rows;
}

async function getFilmById(id) {
  const data = await query("SELECT * FROM films WHERE id = $1;", [id]);
  return data.rows;
}

async function getFilmByTitle(title) {
  const data = await query("SELECT * FROM films WHERE title ILIKE $1;", [
    `%${title}%`,
  ]);
  return data.rows;
}

async function getFilmByGenre(genre) {
  const data = await query("SELECT * FROM films WHERE genre ILIKE $1;", [
    `%${genre}%`,
  ]);
  return data.rows;
}

async function postFilm(film) {
  const { title, imgUrl, description, rating, actors, year, genre } = film;
  const data = await query(
    "INSERT INTO films (title, imgUrl, description, rating, actors, year, genre) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
    [title, imgUrl, description, rating, actors, year, genre]
  );
  return data.rows;
}

async function putFilm(film, id) {
  const { title, imgUrl, description, rating, actors, year, genre } = film;
  const data = await query(
    "UPDATE films SET title = $1, imgUrl = $2, description = $3, rating = $4, actors = $5, year = $6, genre = $7 WHERE id = $8 RETURNING *;",
    [title, imgUrl, description, rating, actors, year, genre, id]
  );
  return data.rows;
}

async function patchFilm(film, id) {
  const columns = [
    "title",
    "imgUrl",
    "description",
    "rating",
    "actors",
    "year",
    "genre",
  ];
  const oldValues = await getFilmById(id);
  const newValues = columns.map((i) =>
    film[i] === undefined ? oldValues[i] : film[i]
  );
  const data = await query(
    "UPDATE films SET $1 = $2 WHERE id = $8 RETURNING *;",
    [...newValues, film.id]
  );
  return data.rows;
}

async function deleteFilm(id) {
  const data = await query("DELETE FROM films WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows;
}

module.exports = {
  getAllFilms,
  getFilmById,
  getFilmByTitle,
  getFilmByGenre,
  postFilm,
  putFilm,
  patchFilm,
  deleteFilm,
};
