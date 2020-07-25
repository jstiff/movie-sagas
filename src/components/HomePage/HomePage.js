import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HomePage.css";

class HomePage extends Component {
  enterSite = () => {
    console.log("entering the site");
    this.props.dispatch({
      type: "NEED_MOVIES",
    });
    this.props.history.push("/movies");
  };
  render() {
    return (
      <>
        <div className="container">
          <h1>Welcome!</h1>
          <button onClick={this.enterSite} className="enterBtn">
            enter
          </button>
        </div>
      </>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(HomePage);
