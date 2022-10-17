import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getWeekRange } from 'redux/auth/auth.selector';
import { getCurrentWeekRange } from './helpers/helpers.function';

import Loader from 'shared/components/Loader';

import s from './CurrentWeekRange.module.scss';

const CurrentWeekRange = () => {
  const weekRange = useSelector(getWeekRange, shallowEqual);

  return weekRange ? (
    <p className={s.weekTabInfo__week}>{getCurrentWeekRange(weekRange)}</p>
  ) : (
    <div className={s.weekTabInfo__week}>
      <Loader height="20" />
    </div>
  );
};

export default React.memo(CurrentWeekRange);
