import React from 'react';
import './TodoEditForm.css';
import { TodoContext } from '../TodoContext';

function TodoEditForm({ todoToEdit, setOpenEditModal }) {
  const { editTodo } = React.useContext(TodoContext);

  const [editedTodoValue, setEditedTodoValue] = React.useState(todoToEdit.text);

  const onSubmit = (event) => {
    event.preventDefault();
    if (editedTodoValue.trim() !== '') {
      editTodo(todoToEdit.text, editedTodoValue);
      setOpenEditModal(false);
    }
  };

  const onChange = (event) => {
    setEditedTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenEditModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Editar Tarea</label>
      <textarea
        placeholder='Modifica tu tarea aquí...'
        value={editedTodoValue}
        onChange={onChange}
        autoFocus
      />
      <div className='TodoEditForm-buttonContainer'>
        <button
          type='button'
          className='TodoEditForm-button TodoEditForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoEditForm-button TodoEditForm-button--save'
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export { TodoEditForm };
