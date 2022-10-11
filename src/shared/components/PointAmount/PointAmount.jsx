import React from 'react';
import s from './PointAmount.module.scss';

const PointAmount = ({ point }) => {
  return (
    <div className={s.point_amount}>
      <span className={s.point_amount_p}>{`${point} points`}</span>
    </div>
  );
};

export default PointAmount;
