import React from 'react';
import Login from './Login/Login';
import s from './AuthForm.module.scss';

const AuthForm = () => {
  return (
    <div className={s.wrapper}>
      <Login />
    </div>
  );
};

export default AuthForm;
