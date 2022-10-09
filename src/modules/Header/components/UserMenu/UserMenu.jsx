import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.scss';
import { ReactComponent as LogoAuth } from 'assets/images/icon/icon-auth.svg';
import UserInfo from '../UserInfo';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth.selector';
import { useDispatch } from 'react-redux';
import { logoutAction } from 'redux/auth/auth.slice';
import { token } from 'shared/service/http/http';

const UserMenu = () => {
  const { email, balance } = useSelector(getUser);
  const dispatch = useDispatch();
  const hadleLogoutClick = () => {
    dispatch(logoutAction());
    token.unset();
  };

  return (
    <div className={s.subcontainer}>
      <div className={s.boxbalance}>
        <p className={s.text}>Score balance:</p>
        <span className={s.balance}>{balance}</span>
      </div>
      <nav className={s.navigation}>
        <NavLink to="/auth" className={s.link}>
          Main
        </NavLink>
        <span className={s.verticalBar}>&#124;</span>
        <NavLink to="/contacts" className={s.link}>
          Planning
        </NavLink>
        <span className={s.verticalBar}>&#124;</span>
        <NavLink to="/contacts" className={s.link}>
          Award
        </NavLink>
        <span className={s.verticalBar}>&#124;</span>
        <NavLink to="/contacts" className={s.link}>
          Contact
        </NavLink>
      </nav>
      <div className={s.box}>
        <UserInfo email={email} />
        <span className={s.verticalBar}>&#124;</span>
        <button
          className={s.btnlogout}
          type="button"
          onClick={hadleLogoutClick}
        >
          <LogoAuth />
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
