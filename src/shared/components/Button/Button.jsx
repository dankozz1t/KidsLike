import React from 'react';
import classNames from 'classnames/bind';

import s from './Button.module.scss';

const cx = classNames.bind(s);

const Button = ({ children, classAccent = 'yellow', onClick, ...rest }) => {
  const classes = cx({
    btn: true,
    [classAccent]: true,
  });

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
