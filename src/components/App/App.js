import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Home from "../Home/Home";
import Details from "../Details/Details";
import Edit from "../Edit/Edit";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit" component={Edit} />
        </Router>
      </div>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(App);
