import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviePoster from "../MoviePoster/MoviePoster";
import "./MovieDisplay.css";

class MovieDisplay extends Component {
  temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  render() {
    return (
      <>
        <h1>Look at all these Movies!</h1>
        <div className="movieGrid">
          {this.temp.map((item) => {
            return <MoviePoster value={item} />;
          })}
        </div>
      </>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(MovieDisplay);
