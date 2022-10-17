import React from 'react';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ children, onClick }) => {
  return (
    <button type="button" className={s.burger__menu} onClick={onClick}>
      {children}
    </button>
  );
};

export default BurgerMenu;
