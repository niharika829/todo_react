import React, { Component } from "react";
import propTypes from "prop-types";
export class todocont extends Component {
  styles() {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.styles()}>
        <input type="checkbox" onChange={this.props.handle.bind(this, id)} />{" "}
        {title}
        <button onClick={this.props.del.bind(this, id)} style={btnStyle}>
          X
        </button>
      </div>
    );
  }
}
todocont.propTypes = {
  todo: propTypes.object.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default todocont;
