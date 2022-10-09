import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <nav className={s.navigation}>
      <NavLink to="/auth" className={s.link}>
        Log in
      </NavLink>
      <span className={s.verticalBar}>&#124;</span>
      <NavLink to="/contacts" className={s.link}>
        Contacts
      </NavLink>
    </nav>
  );
};
export default AuthNav;
