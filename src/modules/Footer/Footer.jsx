import React from 'react';
import s from './Footer.module.scss';
import Logo from 'shared/components/Logo';
import VerticalBar from 'shared/components/VerticalBar/VerticalBar';

const Footer = () => {
  return (
    <div className={s.box}>
      <Logo classFor="Footer" />
      <VerticalBar classFor="Footer" />
      <p className={s.title}>Making the life of parents and children isy :)</p>
      <VerticalBar classFor="Footer" />
      <p className={s.title}>2020</p>
    </div>
  );
};

export default Footer;
