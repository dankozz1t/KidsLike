import { getCurrentDay } from 'redux/userInfo/week.selectors';
import s from './CurrentDay.module.scss';

const CurrentDay = () => {
  return (
    <p className={s.weekTabInfo__dayWrapper}>
      My tasks:
      <span className={s.weekTabInfo__day}>{getCurrentDay()}</span>
    </p>
  );
};

export default CurrentDay;
