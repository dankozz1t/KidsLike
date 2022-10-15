import React from 'react';
import { ReactComponent as Menu } from 'assets/images/header/menu.svg';
import s from './MenuBurger.module.scss';

const MenuBurger = () => {
  return (
    <button type="button" className={s.btn}>
      <Menu />
    </button>
  );
};

export default MenuBurger;
