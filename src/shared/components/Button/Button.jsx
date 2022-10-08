import React from 'react';
import './Button.css';
import classNames from 'classnames';

const Button = ({ children, className, onClick, ...rest }) => {
  const classes = classNames('btn', className);

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
