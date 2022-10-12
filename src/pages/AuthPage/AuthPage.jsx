import React from 'react';
import AuthForm from 'shared/components/AuthForm';
import AuthPageLeftSide from './AuthPage-leftSide';
import s from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <main className={s.main}>
      <AuthPageLeftSide className={s.left__side} />
      <div className={s.right__side}>
        <AuthForm />
      </div>
    </main>
  );
};

export default AuthPage;
