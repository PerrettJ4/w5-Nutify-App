const { query } = require("../index");
const { allFilms } = require("../../data");

async function populateTable() {
  const sqlQuery =
    "INSERT INTO films (title, imgUrl, description, rating, actors, year, genre) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;";
  console.log(allFilms);
  for (let film of allFilms) {
    const response = await query(sqlQuery, [
      film.title,
      film.imgUrl,
      film.description,
      film.rating,
      film.actors,
      film.year,
      film.genre,
    ]);

    console.log(`${response.rows[0].title} inserted into table.`);
  }

  console.log("films table populated.");
}

if (require.main === module) {
  populateTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = populateTable;
