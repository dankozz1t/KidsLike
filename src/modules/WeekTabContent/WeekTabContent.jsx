import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getDaysTasks } from 'redux/task/task.selector';

import CardsList from 'shared/components/CardsList';
import CurrentDay from 'modules/CurrentDay';
import CurrentWeekRange from 'modules/CurrentWeekRange';

import ProgressBar from 'shared/components/ProgressBar';
import NoTasks from '../NoTasks';
import s from './WeekTabContent.module.scss';
import CardListLoader from 'shared/components/CardListLoader';

const WeekTabContent = ({ selectedDate }) => {
  const isTablet = useMediaQuery({ maxWidth: 1279, minWidth: 768 });
  const tasks = useSelector(
    state => getDaysTasks(state, selectedDate),
    shallowEqual
  );

  let data = null;

  if (tasks === null) {
    data = (
      <div className={s.cards_wrapper}>
        <CardListLoader />
      </div>
    );
  } else {
    data = tasks.length ? (
      <div className={s.cards_wrapper}>
        <CardsList tasks={tasks} />
      </div>
    ) : (
      <NoTasks />
    );
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.weekTabInfo}>
          {!isTablet && <CurrentWeekRange />}
          <CurrentDay selectedDate={selectedDate} />
        </div>
        <ProgressBar />
      </div>

      {data}
    </div>
  );
};

export default React.memo(WeekTabContent);
