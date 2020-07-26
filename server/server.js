const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const moviesRouter = require("./routes/movies.router");
const editRouter = require("./routes/edit.router.js");
const genreRouter = require("./routes/genre.router");
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/
app.use("/movies/", moviesRouter);
app.use("/edit/", editRouter);
app.use("/genres", genreRouter);
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log("Listening on port: ", port);
});
