import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';
import VerticalBar from 'shared/components/VerticalBar/VerticalBar';

const AuthNav = () => {
  return (
    <nav className={s.navigation}>
      <NavLink to="/auth" className={s.link}>
        Log in
      </NavLink>
      <VerticalBar classFor="Header" />
      <NavLink to="/contacts" className={s.link}>
        Contacts
      </NavLink>
    </nav>
  );
};
export default AuthNav;
