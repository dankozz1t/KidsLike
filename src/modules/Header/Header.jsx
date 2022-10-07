import React from 'react';
import Container from 'shared/components/Container';

import s from './Header.module.css';

const Header = () => {
  return (
    <Container>
      <h1 className={s.title}>Header</h1>
    </Container>
  );
};

export default Header;
