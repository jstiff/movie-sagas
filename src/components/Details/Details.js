import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Details extends Component {
  movieId = this.props.match.params.id;

  render() {
    return (
      <>
        <h1>Details page!</h1>
        {this.props.state.movies.map((movie) => {
          return this.movieId == movie.id ? (
            <div>
              <h3>{movie.title}</h3>
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
