import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './CardsList.module.scss';

const CardsList = ({ tasks }) => {
  return (
    <ul className={s.cards_list}>
      {tasks.map(task => {
        const { _id: id } = task;
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
  tasks : PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,  
  task : PropTypes.arrayOf(),
}

export default CardsList;