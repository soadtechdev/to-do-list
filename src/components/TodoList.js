import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        id={todo.id}
        removeTodo={this.removeTodo}
      />
    ));
    return (
      <div>
        <h2>Todo list</h2>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
