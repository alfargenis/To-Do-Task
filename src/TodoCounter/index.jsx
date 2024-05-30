import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    loading,
    completedTodos: completed,
    totalTodos: total,
  } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      {loading
        ? "Cargando Tareas📝"
        : completed === total
        ? "¡Sin tareas por resolver! 🎉"
        : "Tareas completadas " + completed + " de " + total}
    </h2>
  );
}

export { TodoCounter };
