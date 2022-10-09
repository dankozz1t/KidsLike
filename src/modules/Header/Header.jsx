import React from 'react';
import Container from 'shared/components/Container';
import Logo from 'shared/components/Logo';
<<<<<<< Updated upstream
import Footer from 'shared/components/Footer';
=======
>>>>>>> Stashed changes
// import Navigation from '';
// import UserMenu from '';
// import AuthNav from '';

import s from './Header.module.css';

const Header = () => {
  // const isLoggedIn = useSelector(getLoggedIn);
  return (
    <header>
      <Container>
        <Logo />
<<<<<<< Updated upstream
        <Footer />
=======
>>>>>>> Stashed changes
        <h1 className={s.title}>Header</h1>
        {/* <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Container>
    </header>
  );
};

export default Header;
