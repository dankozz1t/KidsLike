import WeekTabs from 'modules/WeekTabs';
import React from 'react';

import s from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <h1 className={s.title}>MainPage</h1>
      <WeekTabs />
    </>
  );
};

export default MainPage;
