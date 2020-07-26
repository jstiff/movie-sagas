import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Details.css";

class Details extends Component {
  componentDidMount() {
    this.getGenres();
  }
  getGenres = () => {
    this.props.dispatch({
      type: "NEED_GENRES",
    });
  };

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
              {this.props.state.genres.map((genre) => {
                return <h4>{genre}</h4>;
              })}
              <Link to={`/edit/${this.movieId}`}>
                <button>edit</button>
              </Link>
              ;
            </div>
          ) : (
            false
          );
        })}

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
