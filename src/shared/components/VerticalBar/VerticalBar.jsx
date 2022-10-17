import React from 'react';

import s from './VerticalBar.module.scss';

const VerticalBar = ({ classFor }) => {
  return (
    <div className={s.div}>
      <span
        className={
          classFor === 'Header' ? s.verticalBarHeader : s.verticalBarFooter
        }
      >
        &#124;
      </span>
    </div>
  );
};

export default VerticalBar;
