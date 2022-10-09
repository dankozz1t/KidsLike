import React from 'react';
import Container from 'shared/components/Container';
import Logo from 'shared/components/Logo';
// import Footer from 'shared/components/Footer';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/auth.selector';
// import Navigation from '';
// import UserMenu from '';
// import AuthNav from '';

import s from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  console.log(isLoggedIn);
  return (
    <header>
      <Container>
        <Logo classFor="Header" />
        <h1 className={s.title}>Header</h1>
        {/* <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Container>
    </header>
  );
};

export default Header;
