import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Details.css";

class Details extends Component {
  movieId = this.props.match.params.id;

  render() {
    return (
      <>
        {this.props.state.movies.map((movie) => {
          return this.movieId == movie.id ? (
            <div className="detailsContainer">
              <h1>{movie.title}</h1>
              <br />
              <h4>{movie.description}</h4>
            </div>
          ) : (
            false
          );
        })}
        <h3>{this.id}</h3>
        <Link to="/edit">
          <button>edit</button>
        </Link>
        <Link to="/movies">
          <button>Back to movies</button>
        </Link>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Details);
