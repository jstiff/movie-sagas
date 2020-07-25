import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./MoviePoster.css";

class MoviePoster extends Component {
  checkoutMovie = () => {
    console.log("movie id:", this.props.movie.title);
    // this.props.history.push("/details/{id}");
  };
  render() {
    return (
      <>
        <div className="movie">
          <Link
            //key={this.props.movie.id}
            id={this.props.movie.id}
            to={`details/${this.props.movie.id}`}
            onClick={this.checkoutMovie}
          >
            <img src={this.props.movie.poster} />
          </Link>
          <p>{this.props.movie.title}</p>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(MoviePoster);
