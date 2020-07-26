import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import MoviePoster from "../MoviePoster/MoviePoster";
import "./MovieDisplay.css";

class MovieDisplay extends Component {
  componentDidMount() {
    this.displayMovies();
  }
  displayMovies = () => {
    console.log("entering the site");
    this.props.dispatch({
      type: "NEED_MOVIES",
    });
    // this.props.history.push("/movies");
  };

  render() {
    console.log("Movie display props", this.props);
    console.log("Movie display state", this.state);
    return (
      <>
        {/* <h1>{this}</h1> */}
        <div className="movieGrid">
          {this.props.movies.map((movie) => {
            return <MoviePoster movie={movie} />;
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps)(MovieDisplay);
