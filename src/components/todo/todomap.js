import React, { Component } from "react";
import Todocont from "./todocont.js";
import propTypes from "prop-types";
class todomap extends Component {
  render() {
    return this.props.todo.map((todolist) => (
      <Todocont
        key={todolist.id}
        todo={todolist}
        handle={this.props.handle}
        del={this.props.del}
      />
    ));
  }
}

todomap.propTypes = {
  todo: propTypes.array.isRequired,
};
export default todomap;
