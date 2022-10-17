import React from 'react';

import s from './VerticalBar.module.scss';

const VerticalBar = ({ classFor }) => {
  let classBar = null;
  if (classFor === 'Header') {
    classBar = s.verticalBarHeader;
  } else if (classFor === 'Footer') {
    classBar = s.verticalBarFooter;
  }

  return (
    <div className={s.div}>
      <span className={classBar}>&#124;</span>
    </div>
  );
};

export default VerticalBar;
