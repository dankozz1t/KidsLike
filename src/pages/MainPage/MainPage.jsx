import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import WeekTabContent from 'modules/WeekTabContent';
import WeekTabs from 'modules/WeekTabs';

import { getDates } from 'redux/auth/auth.selector';
import { getUserInfoThunk } from 'redux/auth/auth.thunk';

import s from './MainPage.module.scss';

const QUERY_DAY = 'day';

const MainPage = () => {
  const dispatch = useDispatch();
  const dates = useSelector(getDates);
  const [searchParams] = useSearchParams();

  const selectedDay = searchParams.get(QUERY_DAY);

  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [dispatch]);

  const weekDays = useMemo(() => {
    return Object.keys(dates);
  }, [dates]);

  return (
    <>
      <h1 className={s.title}>MainPage</h1>
      <div className={s.wrapper}>
        <WeekTabs weekDays={weekDays} />
        <WeekTabContent selectedDate={dates[selectedDay]} />
      </div>
    </>
  );
};

export default MainPage;
