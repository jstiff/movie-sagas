const express = require("express");
const pool = require("../modules/pool");
const { default: Axios } = require("axios");
const router = express.Router();

router.get("/:id", (req, res) => {
  let queryString = `SELECT genres.name FROM movie_genres JOIN genres ON genres.id = movie_genres.genre_id WHERE movie_id = ${req.params.id};`;
  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(50);
    });
});

module.exports = router;
