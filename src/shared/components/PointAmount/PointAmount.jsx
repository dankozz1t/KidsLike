import React from 'react';
import PropTypes from 'prop-types';
import s from './PointAmount.module.scss';

const PointAmount = ({ point }) => {
  return (
    <div className={s.point_amount}>
      <span className={s.point_amount_p}>{`${point} points`}</span>
    </div>
  );
};

PointAmount.propTypes = {
  point: PropTypes.string.isRequired,
}

export default PointAmount;
