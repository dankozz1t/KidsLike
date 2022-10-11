import { useSelector } from 'react-redux';
import { getWeekRange } from 'redux/auth/auth.selector';

import s from './CurrentWeekRange.module.scss';

const CurrentWeekRange = () => {

  const weekRange = useSelector(getWeekRange);

  const getCurrentWeekRange = () => {
    if (typeof weekRange.currentMonth === 'object') {
      return `Week: ${weekRange.startDate} ${weekRange.currentMonth[0]} - ${weekRange.endDate} ${weekRange.currentMonth[1]}`;
    }
    return `Week: ${weekRange.startDate}-${weekRange.endDate}
    ${weekRange.currentMonth}`;
  };

  return <p className={s.weekTabInfo__week}>{getCurrentWeekRange()}</p>;
};

export default CurrentWeekRange;
