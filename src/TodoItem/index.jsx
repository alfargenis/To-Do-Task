import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <>
      <li
        className={`TodoItem ${completed && "completed"}`}
        onClick={onComplete}
      >
        <span className={`TodoText ${completed ? "completed" : ""}`}>
          {text}
        </span>
        <span className="Icon Icon-delete" onClick={handleDeleteClick} />
      </li>
    </>
  );
}

export { TodoItem };
