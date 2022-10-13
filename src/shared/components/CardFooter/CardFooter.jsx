import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardTitle from '../CardTitle';
import PointAmount from '../PointAmount';
import TaskToggle from '../TaskToggle';

import { ReactComponent as IconSuccess } from 'assets/images/icon/icon-success.svg';
import { ReactComponent as IconDanger } from 'assets/images/icon/icon-danger.svg';
import { ReactComponent as IconOk } from 'assets/images/icon/icon-ok.svg';
import { ReactComponent as IconAdd } from 'assets/images/icon/icon-add.svg';

import s from './CardFooter.module.scss';
import DaysList from '../DaysList';

const daysList = [
  { day: 'Mo', status: false },
  { day: 'Tu', status: false },
  { day: 'We', status: false },
  { day: 'Th', status: false },
  { day: 'Fr', status: false },
  { day: 'Sa', status: false },
  { day: 'Su', status: false },
];

const CardFooter = ({ ...taskInfo }) => {
  const { title, isCompleted } = taskInfo;
  const { pathname } = useLocation();
  let _id;
  taskInfo.id ? (_id = taskInfo.id) : (_id = taskInfo._id);
  let reward;
  taskInfo.reward ? (reward = taskInfo.reward) : (reward = taskInfo.price);
  const currentWeekDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });

  const [searchParams] = useSearchParams();

  const [show, setShow] = useState(false);

  const handleIconAddClick = () => {
    setShow(!show);

    if (show) {
      console.log('Send');
    }
  };

  const renderElement = () => {
    if (pathname === '/main') {
      if (currentWeekDay === searchParams.get('day')) {
        return <TaskToggle _id={_id} isCompleted={isCompleted} />;
      }

      return isCompleted ? <IconSuccess /> : <IconDanger />;
    } else if (pathname === '/planning') {
      return (
        <>
          {show && <DaysList daysList={daysList} />}
          <button type="button" className={s.icon} onClick={handleIconAddClick}>
            {show ? <IconOk /> : <IconAdd />}
          </button>
        </>
      );
    } else if (pathname === '/award') {
      return <TaskToggle _id={_id} isCompleted={isCompleted} />;
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
