import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Edit extends Component {
  state = {
    description: "",
    title: "",
    id: "",
  };
  handleChange = (event, type) => {
    console.log(type, event.target.value);
    this.setState({
      [type]: event.target.value,
    });
  };
  submitChanges = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "MAKE_CHANGES",
      payload: this.state,
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <h1>Edit page!</h1>

        <form onSubmit={this.submitChanges}>
          <input
            onChange={(event) => this.handleChange(event, "title")}
            placeholder="change destription"
          />
          <br />
          <textarea
            onChange={(event) => this.handleChange(event, "decription")}
            placeholder="change destription"
          />
          <button type="submit">submit changes</button>
        </form>
      </>
    );
  }
}
const mapPropsToState = (state) => ({
  state,
});
export default connect(mapPropsToState)(Edit);
