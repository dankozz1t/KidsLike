import React from 'react';
import Card from '../Card';

const CardsList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => {
        const { _id: id } = task;
        return (
          <li key={id}>
            <Card {...task} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsList;