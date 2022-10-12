import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import CardTitle from '../CardTitle';
import PointAmount from '../PointAmount';
import TaskToggle from '../TaskToggle';

import { ReactComponent as IconSuccess } from 'assets/images/icon/icon-success.svg';
import { ReactComponent as IconDanger } from 'assets/images/icon/icon-danger.svg';

import s from './CardFooter.module.scss';

const CardFooter = ({ ...taskInfo }) => {
  const { _id, title, reward, isCompleted } = taskInfo;
  const { pathname } = useLocation();

  const currentWeekDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });
  const [searchParams] = useSearchParams();

  const renderElement = () => {
    if (pathname === '/main') {
      if (currentWeekDay === searchParams.get('day')) {
        return <TaskToggle _id={_id} isCompleted={isCompleted} />;
      }

      return isCompleted ? <IconSuccess /> : <IconDanger />;
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

export default CardFooter;
