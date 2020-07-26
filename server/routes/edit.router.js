const express = require("express");
const pool = require("../modules/pool");
const { default: Axios } = require("axios");
const router = express.Router();

router.put("/:id", (req, res) => {
  console.log("inside ROUTER PUT", req.body);

  let queryString = `UPDATE movies SET description='hard coded description' WHERE id=${req.params.id};`;

  pool
    .query(queryString)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("error in outer put", err);
      res.sendStatus(501);
    });
});

module.exports = router;
