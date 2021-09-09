var express = require("express");
var router = express.Router();
const {
  getAllFilms,
  getFilmById,
  getFilmByTitle,
  getFilmByGenre,
  postFilm,
  putFilm,
  patchFilm,
  deleteFilm,
} = require("../models/film");

router.get("/", async (req, res) => {
  const { title, genre } = req.query;
  if (title) {
    const data = await getFilmByTitle(title);

    res.json({
      success: true,
      message: `Film search result with title: ${title}`,
      payload: data,
    });
    return;
  }

  if (genre) {
    const data = await getFilmByGenre(genre);
    res.json({
      success: true,
      message: `Search by genre: ${genre}`,
      payload: data,
    });
    return;
  }

  const data = await getAllFilms();

  res.json({
    success: true,
    message: "Here are all the films",
    payload: data,
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getFilmById(id);
  res.json({
    success: true,
    message: `Search result for film with id: ${id}`,
    payload: data,
  });
});

router.post("/", async (req, res) => {
  const { body } = req;
  console.log("body:", body);
  const data = await postFilm(body);

  res.json({
    success: true,
    message: `New film added`,
    payload: data,
  });
});

router.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const data = await putFilm(body, id);
  res.json({
    success: true,
    message: `${title} updated`,
    payload: data,
  });
});

router.patch("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const data = await patchFilm(body, id);
  res.json({
    success: true,
    message: `${id} updated`,
    payload: data,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteFilm(id);
  res.json({
    success: true,
    message: `Film deleted`,
    payload: data,
  });
});

module.exports = router;
