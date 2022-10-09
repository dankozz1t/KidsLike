import React from 'react';
import s from './Footer.module.scss';
import Logo from 'shared/components/Logo';

const Footer = () => {
  return (
    <div className={s.div}>
      <Logo classFor="Footer" />
      <p className={s.title}>Making the life of parents and children isy :)</p>
      <p className={s.title}>2020</p>
    </div>
  );
};

export default Footer;
