import React from 'react';
import AuthForm from 'shared/components/AuthForm';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      {' '}
      <h1 className={s.title}>HomePage</h1>
      <AuthForm />
    </>
  );
};

export default HomePage;
