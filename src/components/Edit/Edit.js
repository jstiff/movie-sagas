import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Edit.css";

class Edit extends Component {
  state = {
    description: this.props.description,
    title: this.props.title,
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
      id: this.id,
      description: this.state.description,
      title: this.state.title,
    };
    console.log("subission details", submissionDetails);
    this.props.dispatch({
      type: "MAKE_CHANGES",
      payload: submissionDetails,
    });

    //this.props.history.push("/confirmation");
  };

  render() {
    console.log("INSIDE edit Props", this.props);
    const { id } = this.props.match.params;
    console.log("ID:", id);
    return (
      <>
        <h1>Edit page!</h1>

        <form className="editForm" onSubmit={this.submitChanges}>
          <h3>{this.state.title}</h3>
          <textarea
            onChange={(event) => this.handleChange(event, "description")}
            placeholder="Change movie description"
            value={this.state.description}
          />
          <br />
          <input
            value={this.state.title}
            className="titleChange"
            onChange={(event) => this.handleChange(event, "title")}
            placeholder="Change Movie Title"
          />
          <Link
            to={{
              pathname: `/confirmation/${id}`,
              state: { title: this.state.title },
            }}
          >
            <button type="submit">submit changes</button>
          </Link>
          <Link className="returnBtn" to="/movies">
            <button>Return to movies</button>
          </Link>
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
    return {
      description: movie.description,
      title: movie.title,
    };
  } else {
    return { state };
  }
};
export default connect(mapPropsToState)(Edit);
