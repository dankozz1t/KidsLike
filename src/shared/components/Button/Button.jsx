import React from 'react';
import s from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ children, className, onClick, ...rest }) => {
  const classes = classNames(s.btn, className);

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
