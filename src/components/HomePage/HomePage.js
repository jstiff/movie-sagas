import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HomePage.css";

class HomePage extends Component {
  // enterSite = () => {
  //   console.log("entering the site");
  //   this.props.dispatch({
  //     type: "NEED_MOVIES",
  //   });
  //   this.props.history.push("/movies");
  // };
  render() {
    console.log("Homepage props", this.props);
    return (
      <>
        <div className="container">
          <h1>{this.props.name}</h1>
          <Link to="/movies">
            <button className="enterBtn">enter</button>
          </Link>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  name: "Netflix",
});
export default connect(mapStateToProps)(HomePage);
