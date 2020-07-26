const express = require("express");
const pool = require("../modules/pool");
const { default: Axios } = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Router GET was a success");
  const querySting = `SELECT * FROM movies;`;
  pool
    .query(querySting)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Yo!!!Error in GET router", err);
    });
});

router.put("/:id", (req, res) => {
  let queryString = `UPDATE "movies" WHERE "id"=${req.params.id};`;
});

module.exports = router;
