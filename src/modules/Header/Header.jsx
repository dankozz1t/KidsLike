import React from 'react';
import Logo from 'shared/components/Logo';
// import Footer from 'shared/components/Footer';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/auth.selector';
// import Navigation from '';
import UserMenu from './components/UserMenu/UserMenu';
import AuthNav from './components/AuthNav/AuthNav';

import s from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={s.header}>
      <Logo classFor="Header" />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
