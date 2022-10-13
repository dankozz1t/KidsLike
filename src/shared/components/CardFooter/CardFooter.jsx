import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle';
import PointAmount from '../PointAmount';
import TaskToggle from '../TaskToggle';

import s from './CardFooter.module.scss';

const CardFooter = ({ ...taskInfo }) => {
  const { title, reward } = taskInfo;
  const { pathname } = useLocation();

  const renderElement = () => {
    if (pathname === '/main') {
      return <TaskToggle />;
    }
  };

  return (
    <div className={s.card_footer}>
      <div>
        <CardTitle title={title} />
        <PointAmount point={reward} />
      </div>
      <>{renderElement()}</>
    </div>
  );
};

CardFooter.propTypes = {
  taskInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      reward: PropTypes.string.isRequired,
    })
  ),
};

export default CardFooter;
