import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // Migrar tareas existentes que no tienen fecha de creación
  React.useEffect(() => {
    const needsMigration = todos.some((todo) => !todo.createdAt);
    if (needsMigration) {
      const migratedTodos = todos.map((todo) => ({
        ...todo,
        createdAt: todo.createdAt || new Date().toISOString(),
      }));
      saveTodos(migratedTodos);
    }
  }, [todos, saveTodos]);

  // Agregar tareas de ejemplo con fechas antiguas (solo para demostración)
  React.useEffect(() => {
    if (todos.length === 0) {
      const now = new Date();
      const exampleTodos = [
        {
          text: 'Comprar leche y pan',
          completed: false,
          createdAt: new Date(
            now.getTime() - 2 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 2 días - Normal
        },
        {
          text: 'Llamar al dentista para cita',
          completed: true,
          createdAt: new Date(
            now.getTime() - 5 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 5 días - Completada
        },
        {
          text: 'Renovar suscripción de Netflix',
          completed: false,
          createdAt: new Date(
            now.getTime() - 10 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 10 días - Urgente
        },
        {
          text: 'Ir al gimnasio',
          completed: false,
          createdAt: new Date(
            now.getTime() - 18 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 18 días - Muy urgente
        },
        {
          text: 'Pagar factura de electricidad',
          completed: false,
          createdAt: new Date(
            now.getTime() - 25 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 25 días - Crítico
        },
        {
          text: 'Comprar regalo de cumpleaños',
          completed: false,
          createdAt: new Date(
            now.getTime() - 35 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 35 días - Vencido
        },
        {
          text: 'Hacer reserva en restaurante',
          completed: false,
          createdAt: new Date(
            now.getTime() - 45 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 45 días - Vencido
        },
        {
          text: 'Renovar licencia de conducir',
          completed: false,
          createdAt: new Date(
            now.getTime() - 60 * 24 * 60 * 60 * 1000
          ).toISOString(), // Hace 60 días - Vencido
        },
      ];
      saveTodos(exampleTodos);
    }
  }, [todos.length, saveTodos]);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  //Completar tareas
  const completeTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    saveTodos(newTodos);
  };
  //Eliminar tareas
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    saveTodos(newTodos);
  };

  // Editar tareas
  const editTodo = (oldText, newText) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === oldText) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        completeTodo,
        deleteTodo,
        searchedTodos,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
