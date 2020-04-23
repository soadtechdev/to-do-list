import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <button>Editar</button>
        <button onClick={this.onDelete}>Eliminar</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}
