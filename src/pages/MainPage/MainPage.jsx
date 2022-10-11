import WeekTabContent from 'modules/WeekTabContent';
import WeekTabs from 'modules/WeekTabs';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from 'redux/userInfo/week.operations';
// import { getWeekRange } from 'redux/userInfo/selectors.userInfo';


import s from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  // const weekRange = useSelector(getWeekRange);

  useEffect(()=>{
    console.log('dispatch')
    dispatch(getUserInfo())

  }, [dispatch])

  return (
    <>
      <h1 className={s.title}>MainPage</h1>
      <div className={s.wrapper}>
      <WeekTabs />
      <WeekTabContent />
      </div>

    </>
  );
};

export default MainPage;
