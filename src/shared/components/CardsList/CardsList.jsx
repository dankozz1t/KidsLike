import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Card from '../Card';
import s from './CardsList.module.scss';

const CardsList = ({ tasks }) => {
  const { pathname } = useLocation();
  let classes = classNames(`${s.cards_list} ${s.center}`);

  if (pathname === '/main') {
    classes = s.cards_list;
  }

  return (
    <ul className={classes}>
      {tasks.map(task => {
        let id;
        task.id ? (id = task.id) : (id = task._id);
        // const { _id: id } = task;
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
