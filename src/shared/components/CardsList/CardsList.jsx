import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './CardsList.module.scss';

const CardsList = ({ tasks }) => {
  return (
    <ul className={s.cards_list}>
      {tasks.map(task => {
        let id;
        task.id ? (id = task.id) : (id = task._id);
        
        return (
          <li key={id} className={s.card_item}>
            <Card {...task} />
          </li>
        );
      })}
    </ul>
  );
};

CardsList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      _id: PropTypes.string,
    })
  ).isRequired,
  task: PropTypes.arrayOf(),
};

export default CardsList;
