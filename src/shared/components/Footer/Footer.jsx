import React from 'react';
import { ReactComponent as LogoFooter } from 'assets/images/icon/icon-logo-footer.svg';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.div}>
      <LogoFooter />
      <p className={s.title}>Making the life of parents and children isy :)</p>
      <p className={s.title}>2020</p>
    </div>
  );
};

export default Footer;
