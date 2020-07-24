import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Edit extends Component {
  render() {
    return (
      <>
        <h1>Edit page!</h1>
      </>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(Edit);
