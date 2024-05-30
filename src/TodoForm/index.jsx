import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Registra tu nueva Tarea</label>
      <textarea
        placeholder="Debo comenzar a ir al Gym"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
