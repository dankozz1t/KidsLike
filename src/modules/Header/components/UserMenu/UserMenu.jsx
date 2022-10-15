import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth.selector';
import { getBalance } from 'redux/task/task.selector';

import Modal from 'shared/components/Modal';
import ModalLogout from 'shared/components/ModalLogout';
import VerticalBar from 'shared/components/VerticalBar/VerticalBar';
import UserInfo from '../UserInfo';

import { ReactComponent as LogoAuth } from 'assets/images/icon/icon-auth.svg';

import s from './UserMenu.module.scss';
import Loader from 'shared/components/Loader';

const UserMenu = () => {
  const { email } = useSelector(getUser, shallowEqual);
  const balance = useSelector(getBalance, shallowEqual);
  const [open, setOpen] = useState(false);

  return (
    <div className={s.subcontainer}>
      <div className={s.boxbalance}>
        <p className={s.text}>Score balance:</p>
        {balance ? (
          <span className={s.balance}>{balance}</span>
        ) : (
          <Loader width="30" />
        )}
      </div>
      <nav className={s.navigation}>
        <NavLink to="/main" className={s.link}>
          Main
        </NavLink>

        <VerticalBar classFor="Header" />

        <NavLink to="/planning" className={s.link}>
          Planning
        </NavLink>

        <VerticalBar classFor="Header" />

        <NavLink to="/award" className={s.link}>
          Award
        </NavLink>

        <VerticalBar classFor="Header" />

        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      </nav>
      <div className={s.box}>
        <UserInfo email={email} />
        <VerticalBar classFor="Header" />
        <button
          className={s.btnlogout}
          type="button"
          onClick={() => setOpen(true)}
        >
          <LogoAuth />
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalLogout onClose={() => setOpen(false)} />
        </Modal>
      </div>
    </div>
  );
};

export default UserMenu;
