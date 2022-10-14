import React from 'react';
import s from './Container.module.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Container = ({ children }) => {
  const { pathname } = useLocation();
  let classes = classNames(`${s.container} ${s.containerPadding}`);

  if (pathname === '/main') {
    classes = s.container;
  }

  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
