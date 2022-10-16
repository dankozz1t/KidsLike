import React, { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { getDates } from 'redux/auth/auth.selector';

import WeekTabContent from 'modules/WeekTabContent';
import WeekTabs from 'modules/WeekTabs';
import Footer from 'modules/Footer';
import PlanningPoints from 'shared/components/PlanningPoints/PlanningPoints';

import s from './MainPage.module.scss';

const QUERY_DAY = 'day';

const MainPage = () => {
  const dates = useSelector(getDates, shallowEqual);

  const [searchParams] = useSearchParams();
  const selectedDay = searchParams.get(QUERY_DAY);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const weekDays = useMemo(() => {
    return Object.keys(dates);
  }, [dates]);

  return (
    <>
      <h1 className={s.title}>MainPage</h1>
      <div className={s.wrapper}>
        <WeekTabs weekDays={weekDays} />
        <div className={s.box}>
          <WeekTabContent selectedDate={dates[selectedDay]} />
          {isMobile && <PlanningPoints />}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
