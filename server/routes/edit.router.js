const express = require("express");
const pool = require("../modules/pool");
const { default: Axios } = require("axios");
const router = express.Router();

router.put("/", (req, res) => {
  console.log("inside ROUTER PUT", req.body.description);
  let queryString = `UPDATE movies SET "description"=${req.body.description} WHERE id=${req.params.id};`;
});

module.exports = router;
