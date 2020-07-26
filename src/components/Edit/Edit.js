import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Edit.css";

class Edit extends Component {
  state = {
    description: "",
    title: "",
  };
  handleChange = (event, type) => {
    console.log(type, event.target.value);
    this.setState({
      [type]: event.target.value,
    });
  };
  submitChanges = (event) => {
    event.preventDefault();
    const submissionDetails = {
      id: this.props.match.params.id,
      description: this.state.description,
      title: this.state.title,
    };
    console.log("subission details", submissionDetails);
    this.props.dispatch({
      type: "MAKE_CHANGES",
      payload: submissionDetails,
    });
    this.props.history.push("/");
  };

  render() {
    console.log("edit Props", this.props);
    return (
      <>
        <h1>Edit page!</h1>

        <form className="editForm" onSubmit={this.submitChanges}>
          <textarea
            onChange={(event) => this.handleChange(event, "decription")}
            placeholder="Change movie description"
            value={this.props.description}
          />
          <br />
          <input
            className="titleChange"
            onChange={(event) => this.handleChange(event, "title")}
            placeholder="Change Movie Title"
          />
          <button type="submit">submit changes</button>
        </form>
      </>
    );
  }
}
const mapPropsToState = (state, ownProps) => {
  const movie = state.movies.find(
    (movie) => movie.id == ownProps.match.params.id
  );
  if (movie) {
    return { description: movie.description };
  } else {
    return { state };
  }

  return {
    state,
  };
};
export default connect(mapPropsToState)(Edit);
