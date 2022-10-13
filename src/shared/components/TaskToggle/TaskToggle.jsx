import React, { useState } from 'react';
import s from './TaskToggle.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as CheckSymbol } from './images/check-symbol.svg';
import { ReactComponent as Attention } from './images/attention.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskStatusThunk } from 'redux/task/task.thunk';

import Loader from 'shared/components/Loader';

import { getDates } from 'redux/auth/auth.selector';
import { toast } from 'react-toastify';

const TaskToggle = ({ _id, isCompleted }) => {
  const [checked, setChecked] = useState(isCompleted);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const dates = useSelector(getDates);

  const currentWeekDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });

  const handleToggleChange = () => {
    setIsLoading(true);
    dispatch(
      toggleTaskStatusThunk({
        id: _id,
        body: { date: dates[currentWeekDay] },
      })
    )
      .unwrap()
      .then(() => {
        setChecked(!checked);
      })
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

      {isLoading && (
        <div className={s.loader}>
          <Loader width="25" />
        </div>
      )}
      <span className={`${s.slider} ${s.round}`}>
        <CheckSymbol className={s.check_symbol} width="10" height="10" />
        <Attention className={s.attention} width="5" height="12" />
      </span>
    </label>
  );
};

TaskToggle.propTypes = {
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default TaskToggle;
