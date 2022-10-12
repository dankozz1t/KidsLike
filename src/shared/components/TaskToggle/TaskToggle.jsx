import React, { useState } from 'react';
import s from './TaskToggle.module.scss';
import { ReactComponent as CheckSymbol } from './images/check-symbol.svg';
import { ReactComponent as Attention } from './images/attention.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskStatusThunk } from 'redux/task/task.thunk';

import { getDates } from 'redux/auth/auth.selector';

const TaskToggle = ({ _id, isCompleted }) => {
  const [checked, setChecked] = useState(isCompleted);
  const dispatch = useDispatch();

  const dates = useSelector(getDates);

  const currentWeekDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });

  const handleToggleChange = () => {
    setChecked(!checked);
    dispatch(
      toggleTaskStatusThunk({ id: _id, body: { date: dates[currentWeekDay] } })
    );
  };

  return (
    <label htmlFor={_id} className={s.switch}>
      <input
        id={_id}
        className={s.checkbox}
        type="checkbox"
        onChange={handleToggleChange}
        checked={checked}
      />

      <span className={`${s.slider} ${s.round}`}>
        <CheckSymbol className={s.check_symbol} width="10" height="10" />
        <Attention className={s.attention} width="5" height="12" />
      </span>
    </label>
  );
};
export default TaskToggle;
