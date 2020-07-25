import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./MoviePoster.css";

class MoviePoster extends Component {
  render() {
    return (
      <>
        <div className="movie">{this.props.value}</div>
      </>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(MoviePoster);
