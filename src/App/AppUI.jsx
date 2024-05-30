import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { CircularProgressBar } from "../CircularProgressBar";
import { TodosLoading } from "../TodoLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    completedTodos,
    totalTodos,
    completeTodo,
    deleteTodo,
    searchedTodos,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <div className="TodoContainer">
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {!loading && (
          <div className="CircularProgressBar">
            <CircularProgressBar
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
          </div>
        )}
      </div>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm></TodoForm>
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
