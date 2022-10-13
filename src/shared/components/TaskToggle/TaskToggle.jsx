import React from 'react';
import PropTypes from 'prop-types';
import s from './TaskToggle.module.scss';
import { ReactComponent as CheckSymbol } from './images/check-symbol.svg';
import { ReactComponent as Attention } from './images/attention.svg';

const TaskToggle = ({ id }) => {

  return (
    <label htmlFor={id} className={s.switch}>
      <input
        id={id}
        className={s.checkbox}
        type="checkbox"
      />
      <span className={`${s.slider} ${s.round}`}>
        <CheckSymbol className={s.check_symbol} width="10" height="10" />
        <Attention className={s.attention} width="5" height="12" />
      </span>
    </label>
  );
};

TaskToggle.propTypes = {
  id: PropTypes.string,
}

export default TaskToggle;