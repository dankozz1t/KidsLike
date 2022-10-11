import { useSelector } from 'react-redux';
import { getWeekRange } from 'redux/userInfo/week.selectors';
import s from './CurrentWeekRange.module.scss';

const CurrentWeekRange = () => {

  const weekRange = useSelector(getWeekRange);

  const getCurrentWeekRange = () => {
    if (typeof weekRange.currentMonth === 'object') {
      console.log('diff months');
      return `Week: ${weekRange.startDate} ${weekRange.currentMonth[0]} - ${weekRange.endDate} ${weekRange.currentMonth[1]}`;
    }
    console.log('same months');
    return `Week: ${weekRange.startDate}-${weekRange.endDate}
    ${weekRange.currentMonth}`;
  };

  return <p className={s.weekTabInfo__week}>{getCurrentWeekRange()}</p>;
};

export default CurrentWeekRange;
