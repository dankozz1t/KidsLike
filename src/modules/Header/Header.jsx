import React from 'react';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/auth.selector';

import UserMenu from './components/UserMenu/UserMenu';
import AuthNav from './components/AuthNav/AuthNav';
import Logo from 'shared/components/Logo';

import s from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo classFor="Header" />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
