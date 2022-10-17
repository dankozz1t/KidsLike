import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth.selector';
import Modal from 'shared/components/Modal';
import ModalLogout from 'shared/components/ModalLogout';
import { ReactComponent as IconBurgerMenu } from 'assets/images/icon/icon-burgerMenu.svg';
import { ReactComponent as CloseBurgerMenu } from 'assets/images/icon/icon-BurgerClose.svg';
import BurgerMenu from 'shared/components/BurgerMenu/BurgerMenu';
import VerticalBar from 'shared/components/VerticalBar/VerticalBar';
import UserInfo from '../UserInfo';

import { ReactComponent as LogoAuth } from 'assets/images/icon/icon-auth.svg';

import s from './UserMenu.module.scss';
import Loader from 'shared/components/Loader';

const UserMenu = () => {
  const { email, balance } = useSelector(getUser);
  const [open, setOpen] = useState(false);
  const [isShowNav, setIsShowNav] = useState(false);

  const handleIsShowMenu = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <div className={s.subcontainer}>
      <div className={s.boxbalance}>
        <p className={s.text}>Score balance:</p>
        {balance !== null ? (
          <span className={s.balance}>{balance}</span>
        ) : (
          <Loader width="30" height="20" />
        )}
      </div>

      <div className={s.burger_menu}>
        <BurgerMenu onClick={handleIsShowMenu}>
          <IconBurgerMenu />
        </BurgerMenu>
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
          <LogoAuth className={s.logo__auth} />
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalLogout onClose={() => setOpen(false)} />
        </Modal>
      </div>
      {isShowNav && (
        <div className={s.modal_nav}>
          <div className={s.modal_nav_wrapper}>
            <div className={s.burger_menu}>
              <div className={s.box__mobile}>
                <UserInfo email={email.slice(0, 5)} />
                <VerticalBar classFor="Header" />
                <button
                  className={s.btnlogout__modal}
                  type="button"
                  onClick={() => setOpen(true)}
                >
                  <LogoAuth className={s.icon__logout} />
                </button>
                <Modal open={open} onClose={() => setOpen(false)}>
                  <ModalLogout onClose={() => setOpen(false)} />
                </Modal>
              </div>
              <div className={s.burger_menu_close}>
                <BurgerMenu onClick={handleIsShowMenu}>
                  <CloseBurgerMenu />
                </BurgerMenu>
              </div>
            </div>
            <nav className={s.navigation__mobile}>
              <NavLink to="/main" className={s.link__mobile}>
                Main
              </NavLink>
              <NavLink to="/planning" className={s.link__mobile}>
                Planning
              </NavLink>
              <NavLink to="/award" className={s.link__mobile}>
                Award
              </NavLink>
              <NavLink to="/contacts" className={s.link__mobile}>
                Contacts
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
