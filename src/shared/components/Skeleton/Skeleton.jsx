import React from 'react';
import classNames from 'classnames';
import injectStyle from './injectStyle';

const skeleton = `
@-webkit-keyframes skeleton {
  0%   {   background-position: 0 50%; }
  50%  { background-position: 100% 50%; }
}
`;

const DEFAULT_BG = 'linear-gradient(90deg, #eee, #a9a7a7, #eee)';

const Skeleton = ({ className, gradient = DEFAULT_BG, ...props }) => {
  injectStyle(skeleton);

  const styles = {
    width: '100%',
    minHeight: '8px',
    background: gradient,

    backgroundSize: '300% 300%',
    animation: 'skeleton 3s ease infinite',
  };

  const classes = classNames(className);
  return <div className={classes} style={styles} {...props} />;
};

export default Skeleton;
