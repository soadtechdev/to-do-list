import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onUpdateTask = this.onUpdateTask.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onDeleteTask() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  onChangeTask(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onUpdateTask(e) {
    e.preventDefault();
    //mandando id y tarea a actualizar
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  onToggle(e) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.onUpdateTask}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.onChangeTask}
            />
            <button>Guardar</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Editar</button>
          <button onClick={this.onDeleteTask}>Eliminar</button>
          <li
            className={this.props.completed ? "completed" : ""}
            onClick={this.onToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}
