import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoVictory } from 'assets/images/icon/icon-logo-victory.svg';

import s from './Logo.module.scss';

const Logo = ({ classFor }) => {
  let classText = null;
  let classIcon = null;
  if (classFor === 'Header') {
    classText = s.titleLogoHeader;
  } else if (classFor === 'Footer') {
    classText = s.titleLogoFooter;
    classIcon = s.icon;
  }
  return (
    <Link to="/" className={s.box}>
      <p className={classText}>KidsLike</p>
      <LogoVictory className={classIcon} />
    </Link>
  );
};

export default Logo;
