import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./MoviePoster.css";

class MoviePoster extends Component {
  checkoutMovie = (event) => {
    console.log("movie id:", this.props.movie.id);
    this.props.history.push("/details/1");
  };
  render() {
    return (
      <>
        <Router>
          <div className="movie">
            <img
              poop={this.props.movie.id}
              onClick={this.checkoutMovie}
              src={this.props.movie.poster}
            />
            <p>{this.props.movie.title}</p>
          </div>
        </Router>
      </>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(MoviePoster);
