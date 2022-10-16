import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import CardTitle from 'shared/components/CardTitle';
import PointAmount from 'shared/components/PointAmount';
import TaskToggle from 'shared/components/TaskToggle';
import ButtonAddPlanning from 'shared/components/ButtonAddPlanning';

import { ReactComponent as IconSuccess } from 'assets/images/icon/icon-success.svg';
import { ReactComponent as IconDanger } from 'assets/images/icon/icon-danger.svg';

import { toast } from 'react-toastify';

import s from './CardFooter.module.scss';

const PATH_NAME = Object.freeze({
  MAIN: '/main',
  PLANNING: '/planning',
  AWARD: '/award',
});

const CardFooter = ({ ...taskInfo }) => {
  const { title, isCompleted, isSelected } = taskInfo;
  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();

  let _id;
  taskInfo.id ? (_id = taskInfo.id) : (_id = taskInfo._id);
  let reward;
  taskInfo.reward ? (reward = taskInfo.reward) : (reward = taskInfo.price);

  const renderElement = () => {
    switch (pathname) {
      case PATH_NAME.MAIN: {
        const currentWeekDay = new Date().toLocaleString('en-US', {
          weekday: 'long',
        });

        if (currentWeekDay === searchParams.get('day')) {
          return <TaskToggle _id={_id} isCompleted={isCompleted} />;
        }

        return isCompleted ? <IconSuccess /> : <IconDanger />;
      }

      case PATH_NAME.PLANNING: {
        return <ButtonAddPlanning _id={_id} />;
      }

      case PATH_NAME.AWARD: {
        return <TaskToggle _id={_id} isCompleted={isSelected} />;
      }

      default:
        return toast.error('NotFound');
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
      id: PropTypes.number,
      _id: PropTypes.string,
      reward: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ),
};

export default CardFooter;
