import WeekTabContent from 'modules/WeekTabContent';
import WeekTabs from 'modules/WeekTabs';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDates } from 'redux/auth/auth.selector';
import { getUserInfo } from 'redux/auth/auth.thunk';
// import { getUserInfo } from 'redux/userInfo/week.operations';
// import { getWeekRange } from 'redux/userInfo/selectors.userInfo';

import s from './MainPage.module.scss';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const MainPage = () => {
  const dispatch = useDispatch();
  // const weekRange = useSelector(getWeekRange);

  useEffect(() => {
    console.log('dispatch');
    dispatch(getUserInfo());
  }, [dispatch]);


  const dates = useSelector(getDates);
  console.log(dates)

  return (
    <>
      <h1 className={s.title}>MainPage</h1>
      <div className={s.wrapper}>
        <WeekTabs daysOfWeek ={daysOfWeek}/>
        <WeekTabContent />
      </div>
    </>
  );
};

export default MainPage;
