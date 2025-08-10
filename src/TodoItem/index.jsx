import React from 'react';
import './TodoItem.css';
import { TodoDate } from '../TodoDate';
import { getUrgencyClass, calculateUrgency } from '../utils/todoUrgency';

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
  onEdit,
  createdAt,
}) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit();
  };

  const urgencyClass = getUrgencyClass(createdAt, completed);
  const urgencyLevel = calculateUrgency(createdAt, completed);

  return (
    <>
      <li
        className={`TodoItem ${completed ? 'completed' : urgencyClass}`}
        onClick={onComplete}
      >
        {!completed && urgencyLevel !== 'normal' && (
          <div className={`urgency-indicator ${urgencyLevel}`}></div>
        )}
        <div className='TodoItem-content'>
          {createdAt && <TodoDate createdAt={createdAt} />}
          <span className={`TodoText ${completed ? 'completed' : ''}`}>
            {text}
          </span>
        </div>
        <div className='TodoItem-buttons'>
          <span className='Icon Icon-edit' onClick={handleEditClick} />
          <span className='Icon Icon-delete' onClick={handleDeleteClick} />
        </div>
      </li>
    </>
  );
}

export { TodoItem };
