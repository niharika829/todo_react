import React, { Component } from "react";
import Todomap from "./todomap";
import Header from "./header.js";
import Input from "./input.js";
import About from "./about.js";
import uuid from "react-uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
class app extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };

    this.handle = this.handle.bind(this);
    this.del = this.del.bind(this);
    this.submit = this.submit.bind(this);
  }
  handle = (id) => {
    this.setState({
      todos: this.state.todos.map((newtodo) => {
        if (newtodo.id === id) {
          newtodo.completed = !newtodo.completed;
        }
        return newtodo;
      }),
    });
  };
  del = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  submit(title) {
    const newtodos = {
      id: uuid(),
      title: title,
      completed: false,
    };
    console.log(title);
    this.setState({ todos: [...this.state.todos, newtodos] });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Input submit={this.submit} />
                  <Todomap
                    todo={this.state.todos}
                    handle={this.handle}
                    del={this.del}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default app;
