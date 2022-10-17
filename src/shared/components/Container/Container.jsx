import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Container.module.scss';

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
