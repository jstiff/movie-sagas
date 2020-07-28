import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Edit from "../Edit/Edit";

class ConfirmPage extends Component {
  componentDidMount() {
    const { title } = this.props.location.state;
  }

  render() {
    return (
      <>
        <h1>
          Changes have sucessfully been made to
          {/* <h1>{this.props.location.state.title}</h1> */}
        </h1>
        <Link to="/movies">
          <button onClick={this.returnToMovies}>return to movies</button>
        </Link>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("MapStateToPRops", state.movie);
  return {
    state,
  };
};
export default connect(mapStateToProps)(ConfirmPage);
