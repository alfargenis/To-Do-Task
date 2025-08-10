// Función para calcular la urgencia de una tarea basada en su fecha de creación
export const calculateUrgency = (createdAt, completed = false) => {
  // Si la tarea está completada, no tiene urgencia
  if (completed) {
    return 'normal';
  }

  const now = new Date();
  const createdDate = new Date(createdAt);
  const diffTime = Math.abs(now - createdDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Menos de 7 días: normal (verde)
  if (diffDays <= 7) {
    return 'normal';
  }

  // 8-14 días: urgente (rosa claro)
  if (diffDays <= 14) {
    return 'urgent';
  }

  // 15-21 días: muy urgente (rosa medio)
  if (diffDays <= 21) {
    return 'very-urgent';
  }

  // 22-30 días: crítico (rosa oscuro)
  if (diffDays <= 30) {
    return 'critical';
  }

  // Más de 30 días: vencido (rojo)
  return 'overdue';
};

// Función para obtener la clase CSS basada en la urgencia
export const getUrgencyClass = (createdAt, completed = false) => {
  const urgency = calculateUrgency(createdAt, completed);
  return urgency === 'normal' ? '' : urgency;
};
