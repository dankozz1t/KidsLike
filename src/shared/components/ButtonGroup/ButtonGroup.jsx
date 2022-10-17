import React from 'react';
import { ReactComponent as IconError } from 'assets/images/icon/icon-danger.svg';
import { ReactComponent as IconAdd } from 'assets/images/icon/icon-add.svg';
import { ReactComponent as IconOk } from 'assets/images/icon/icon-ok.svg';
import { ReactComponent as IconSuccess } from 'assets/images/icon/icon-success.svg';

import classNames from 'classnames';
import s from './ButtonGroup.module.scss';

export const ButtonError = ({ ...arg }) => {
  return (
    <button {...arg} type="button" className={classNames(s.btn, s.btn__error)}>
      <IconError />
    </button>
  );
};

export const ButtonSuccess = ({ ...arg }) => {
  return (
    <button {...arg} type="button" className={s.btn__success}>
      <IconSuccess />
    </button>
  );
};

export const ButtonAdd = ({ ...arg }) => {
  return (
    <button {...arg} type="button" className={s.btn}>
      <IconAdd />
    </button>
  );
};

export const ButtonOk = ({ ...arg }) => {
  return (
    <button {...arg} type="button" className={s.btn}>
      <IconOk />
    </button>
  );
};
