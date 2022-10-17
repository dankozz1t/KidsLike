import React from 'react';

import Logo from 'shared/components/Logo';
import VerticalBar from 'shared/components/VerticalBar/VerticalBar';

import s from './Footer.module.scss';

const Footer = () => {
  let today = new Date();
  let date = today.getFullYear();

  return (
    <div className={s.box}>
      <Logo classFor="Footer" />
      <VerticalBar classFor="Footer" />
      <p className={s.title}>Making the life of parents and children easy :)</p>
      <VerticalBar classFor="Footer" />
      <p className={s.title}>{date}</p>
    </div>
  );
};

export default Footer;
