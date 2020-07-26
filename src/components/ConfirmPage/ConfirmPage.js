import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class ConfirmPage extends Component {
  returnToMovies = () => {
    console.log("thanks for subbmitting");
  };
  render() {
    return (
      <>
        <h1>Changes have been made!</h1>
        <Link to="/movies">
          <button onClick={this.returnToMovies}></button>
        </Link>
      </>
    );
  }
}

export default ConfirmPage;
