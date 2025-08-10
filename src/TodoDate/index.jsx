import React from 'react';
import './TodoDate.css';

function TodoDate({ createdAt }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Si es hoy
    if (diffDays === 1) {
      return 'Hoy';
    }

    // Si es ayer
    if (diffDays === 2) {
      return 'Ayer';
    }

    // Si es esta semana
    if (diffDays <= 7) {
      return `Hace ${diffDays - 1} días`;
    }

    // Si es este mes
    if (diffDays <= 30) {
      const weeks = Math.floor((diffDays - 1) / 7);
      if (weeks === 1) {
        return 'Hace 1 semana';
      } else if (weeks > 1) {
        return `Hace ${weeks} semanas`;
      }
    }

    // Formato largo para fechas más antiguas
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className='TodoDate'>
      <span className='TodoDate-text'>{formatDate(createdAt)}</span>
    </div>
  );
}

export { TodoDate };
