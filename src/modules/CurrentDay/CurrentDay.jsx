import s from './CurrentDay.module.scss';

const CurrentDay = ({ selectedDate }) => {
  const getCurrentDay = date => {
    const day = new Date(date).toLocaleString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const formatDay = day.replaceAll('/', '-');
    return formatDay;
  };

  return (
    <p className={s.weekTabInfo__dayWrapper}>
      My tasks:
      <span className={s.weekTabInfo__day}>{getCurrentDay(selectedDate)}</span>
    </p>
  );
};

export default CurrentDay;
