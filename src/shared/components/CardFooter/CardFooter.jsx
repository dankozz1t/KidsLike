import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { getDaysList } from 'redux/task/task.selector';
import PropTypes from 'prop-types';

import CardTitle from '../CardTitle';
import PointAmount from '../PointAmount';
import TaskToggle from '../TaskToggle';
import DaysList from '../DaysList';

import { ReactComponent as IconSuccess } from 'assets/images/icon/icon-success.svg';
import { ReactComponent as IconDanger } from 'assets/images/icon/icon-danger.svg';
import { ReactComponent as IconOk } from 'assets/images/icon/icon-ok.svg';
import { ReactComponent as IconAdd } from 'assets/images/icon/icon-add.svg';

import { shallowEqual, useSelector } from 'react-redux';

import s from './CardFooter.module.scss';
import { toast } from 'react-toastify';

const PATH_NAME = Object.freeze({
  MAIN: '/main',
  PLANNING: '/planning',
  AWARD: '/award',
});

const CardFooter = ({ ...taskInfo }) => {
  const { title, isCompleted, isSelected } = taskInfo;
  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(false);

  let _id;
  taskInfo.id ? (_id = taskInfo.id) : (_id = taskInfo._id);
  let reward;
  taskInfo.reward ? (reward = taskInfo.reward) : (reward = taskInfo.price);

  const daysList = useSelector(state => getDaysList(state, _id), shallowEqual);

  const handleIconAddClick = () => {
    setShow(!show);
  };

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
        return (
          <>
            {show && (
              <DaysList setShow={setShow} _id={_id} daysList={daysList} />
            )}
            <button
              type="button"
              className={s.icon}
              onClick={handleIconAddClick}
            >
              {show ? <IconOk /> : <IconAdd />}
            </button>
          </>
        );
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
