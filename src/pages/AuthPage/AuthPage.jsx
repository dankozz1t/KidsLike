import React from 'react';
import Footer from 'modules/Footer';
import Login from 'shared/components/Login';
import AuthPageLeftSide from './AuthPage-leftSide';

import s from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <>
      <main className={s.main}>
        <AuthPageLeftSide className={s.left__side} />
        <div className={s.right__side}>
          <div className={s.form}>
            <Login />
          </div>
          <div className={s.footer}>
            <Footer className={s.footer__elem} />
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
