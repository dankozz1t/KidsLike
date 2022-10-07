import React from 'react';
import Auth from 'shared/components/Auth';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      {' '}
      <h1 className={s.title}>HomePage</h1>
      <Auth />
    </>
  );
};

export default HomePage;
