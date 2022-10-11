import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useUserLogoutMutation } from 'redux/auth/authAPI/authAPI';
import { getUserName } from 'redux/auth/authAPI/authSlice';
import { getLanguage } from 'redux/language/selectors';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  const name = useSelector(getUserName);
  const [logout] = useUserLogoutMutation();

  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.menu}>
      <p className={s.greeting}>
        {lang.header_greeting} <span className={s.name}>{name}</span>!
      </p>
      <Button variant="primary" type="button" onClick={handleLogoutClick}>
        {lang.btn_logout}
      </Button>
    </div>
  );
};

export default UserMenu;
