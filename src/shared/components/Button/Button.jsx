import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({ children, classAccent = "yellow", onClick, ...rest }) => {

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
