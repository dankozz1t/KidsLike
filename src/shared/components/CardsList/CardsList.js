import React from 'react';
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

export default CardsList;