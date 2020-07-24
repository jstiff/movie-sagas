import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    return (
      <>
        <h1>Details page!</h1>
      </>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(Details);
