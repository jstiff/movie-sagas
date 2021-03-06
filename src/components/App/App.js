import React, { Component } from "react";
import { HashRouter as Router, Route, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Details from "../Details/Details";
import Edit from "../Edit/Edit";
import MovieDisplay from "../MovieDisplay/MovieDisplay";
import HomePage from "../HomePage/HomePage";
import ConfirmPage from "../ConfirmPage/ConfirmPage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    console.log("redux store", this.props);
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MovieDisplay} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/confirmation" component={ConfirmPage} />
        </Router>
      </div>
    );
  }
}
const connectStore = (Store) => ({
  Store,
});
export default connect(connectStore)(App);
