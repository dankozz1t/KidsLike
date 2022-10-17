import React from 'react';
import { getCurrentDay } from './helpers/helpers.function';
import Loader from 'shared/components/Loader';

import s from './CurrentDay.module.scss';

const CurrentDay = ({ selectedDate }) => {
  const currentDay = getCurrentDay(selectedDate)?.toUpperCase();

  if (!currentDay) {
    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <p className={s.weekTabInfo__dayWrapper}> My tasks:</p>
        <Loader height="20" />
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
