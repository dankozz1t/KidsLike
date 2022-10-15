import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';
import VerticalBar from 'shared/components/VerticalBar/VerticalBar';
import BurgerMenu from 'shared/components/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { ReactComponent as IconBurgerMenu } from 'assets/images/icon/icon-burgerMenu.svg';
import { ReactComponent as CloseBurgerMenu } from 'assets/images/icon/icon-BurgerClose.svg';

const AuthNav = () => {
  const [isShow, setIsShow] = useState(false);

  const handleIsShowMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div className={s.burger_menu}>
        <BurgerMenu onClick={handleIsShowMenu}>
          <IconBurgerMenu />
        </BurgerMenu>
      </div>
      <nav className={s.navigation}>
        <NavLink to="/auth" className={s.link}>
          Log in
        </NavLink>
        <VerticalBar classFor="Header" />
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      </nav>
      {isShow && (
        <div className={s.navigation__wrapper}>
          <nav className={s.navigation__burger}>
            <div className={s.burger_menu_close}>
              <BurgerMenu onClick={handleIsShowMenu}>
                <CloseBurgerMenu />
              </BurgerMenu>
            </div>
            <NavLink
              to="/auth"
              className={s.link__burger}
              onClick={handleIsShowMenu}
            >
              Log in
            </NavLink>
            <NavLink
              to="/contacts"
              className={s.link__burger}
              onClick={handleIsShowMenu}
            >
              Contacts
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};
export default AuthNav;
