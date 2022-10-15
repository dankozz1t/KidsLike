import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getWeekRange } from 'redux/auth/auth.selector';

import Loader from 'shared/components/Loader';

import s from './CurrentWeekRange.module.scss';

const CurrentWeekRange = () => {
  const weekRange = useSelector(getWeekRange, shallowEqual);

  const getCurrentWeekRange = () => {
    if (typeof weekRange.currentMonth === 'object') {
      return `Week: ${weekRange.startDate} ${weekRange.currentMonth[0]} - ${weekRange.endDate} ${weekRange.currentMonth[1]}`;
    }
    return `Week: ${weekRange.startDate}-${weekRange.endDate}
    ${weekRange.currentMonth}`;
  };

  return weekRange ? (
    <p className={s.weekTabInfo__week}>{getCurrentWeekRange()}</p>
  ) : (
    <div className={s.weekTabInfo__week}>
      <Loader height="20" />
    </div>
  );
};

export default React.memo(CurrentWeekRange);
