import React from 'react';
import Loader from 'shared/components/Loader';
import s from './CurrentDay.module.scss';

const CurrentDay = ({ selectedDate }) => {
  const getCurrentDay = date => {
    if (!date) {
      return null;
    }

    const day = new Date(date).toLocaleString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const formatDay = day.replaceAll('/', '-');
    return formatDay;
  };

  const currentDay = getCurrentDay(selectedDate);

  if (!currentDay) {
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <p className={s.weekTabInfo__dayWrapper}> My tasks:</p>
        <Loader width="20" />
      </div>
    );
  }

  return (
    <p className={s.weekTabInfo__dayWrapper}>
      My tasks:
      <span className={s.weekTabInfo__day}>{currentDay}</span>
    </p>
  );
};

export default React.memo(CurrentDay);
