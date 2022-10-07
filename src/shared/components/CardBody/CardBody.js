import React from 'react';

const CardBody = ({ task }) => (
  <img 
  className="card__image" 
  src={task.imageUrl} 
  alt={t(task.title)} />
);

export default CardBody;