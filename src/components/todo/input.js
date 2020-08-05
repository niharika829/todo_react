import React, { Component } from "react";

export class input extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submit(event) {
    event.preventDefault();
    this.props.submit(this.state.title);
    this.setState({
      title: "",
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="add a todo"
            value={this.state.title}
            onChange={this.change}
          />
          <input
            type="submit"
            value="submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
        <b> you are adding:- </b>
        <i>{this.state.title}</i>
      </div>
    );
  }
}

export default input;
