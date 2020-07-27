const express = require("express");
const pool = require("../modules/pool");
const { default: Axios } = require("axios");
const router = express.Router();

router.put("/:id", (req, res) => {
  console.log("inside ROUTER PUT", req.body);

  const queryString = `UPDATE movies SET description=$1 WHERE id=$2;`;
  const queryValues = [req.body.description, req.body.id];

  pool
    .query(queryString, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("error in outer put", err);
      res.sendStatus(501);
    });
});

module.exports = router;
