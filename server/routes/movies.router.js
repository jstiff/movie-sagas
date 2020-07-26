const express = require("express");
const pool = require("../modules/pool");
const { default: Axios } = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Router GET was a success");
  const queryString = `SELECT * FROM movies;`;
  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Yo!!!Error in GET router", err);
    });
});

module.exports = router;
