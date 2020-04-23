import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: "" };
    this.onTask = this.onTask.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onTask(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitForm(e) {
    e.preventDefault();

    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
    //reiniciamos el state
    this.setState({ task: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="task">Nueva Tarea</label>
        <input
          type="text"
          placeholder="new task"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.onTask}
        />
        <button className="btn-add">Agregar</button>
      </form>
    );
  }
}
