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

import { shallowEqual, useSelector } from 'react-redux';

import s from './CardFooter.module.scss';
import DaysList from '../DaysList';
import { getDaysList } from 'redux/task/task.selector';

const CardFooter = ({ _id, title, reward, isCompleted }) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const daysList = useSelector(state => getDaysList(state, _id), shallowEqual);

  const [show, setShow] = useState(false);

  const handleIconAddClick = () => {
    setShow(!show);
  };

  const renderElement = () => {
    if (pathname === '/main') {
      const currentWeekDay = new Date().toLocaleString('en-US', {
        weekday: 'long',
      });

      if (currentWeekDay === searchParams.get('day')) {
        return <TaskToggle _id={_id} isCompleted={isCompleted} />;
      }

      return isCompleted ? <IconSuccess /> : <IconDanger />;
    } else if (pathname === '/planning') {
      return (
        <>
          {show && <DaysList setShow={setShow} _id={_id} daysList={daysList} />}
          <button type="button" className={s.icon} onClick={handleIconAddClick}>
            {show ? <IconOk /> : <IconAdd />}
          </button>
        </>
      );
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
      _id: PropTypes.string.isRequired,
      reward: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ),
};

export default CardFooter;
