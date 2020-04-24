import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    // this.create = this.create.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
    // this.update = this.update.bind(this);
    // this.toggleCompleteTask = this.toggleCompleteTask.bind(this);
  }
  componentDidMount() {
    const taskLS = localStorage.getItem("task");
    if (taskLS) {
      this.setState({
        todos: JSON.parse(taskLS),
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("task", JSON.stringify(this.state.todos));
  }
  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  };

  update = (id, updateTask) => {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({ todos: updateTodos });
  };

  toggleCompleteTask = (id) => {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updateTodos });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
        id={todo.id}
        removeTodo={this.removeTodo}
        updateTodo={this.update}
        toggleTodo={this.toggleCompleteTask}
      />
    ));

    return (
      <div className="TodoList">
        <h1>
          React Todo List <span>By: Fernando Ropero</span>
        </h1>
        <NewTodoForm createTodo={this.create} />
        <span>Click o Hover para ver acciones</span>
        <ul>{todos}</ul>
      </div>
    );
  }
}
