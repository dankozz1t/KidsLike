import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ReactComponent as CheckSymbol } from './images/check-symbol.svg';
import { ReactComponent as Attention } from './images/attention.svg';

import { getDates } from 'redux/auth/auth.selector';
import { getGifts } from 'redux/gift/gift.selector';
import { toggleSelectGift } from 'redux/gift/gift.slice';
import { toggleTaskStatusThunk } from 'redux/task/task.thunk';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Loader from 'shared/components/Loader';

import classNames from 'classnames';
import s from './TaskToggle.module.scss';

const TaskToggle = ({ _id, isCompleted, isSelected }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dates = useSelector(getDates, shallowEqual);
  const gifts = useSelector(getGifts, shallowEqual);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const currentWeekDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });

  const handleToggleChange = event => {
    if (pathname === '/main') {
      setIsLoading(true);
      dispatch(
        toggleTaskStatusThunk({
          id: _id,
          body: { date: dates[currentWeekDay] },
        })
      )
        .unwrap()
        .catch(error => {
          toast.error(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (pathname === '/award') {
      const idxInArray = gifts.findIndex(gift => {
        return gift.id === +event.target.id;
      });
      dispatch(toggleSelectGift(idxInArray));
    }
  };

  return (
    <label htmlFor={_id} className={s.switch}>
      <input
        id={_id}
        className={s.checkbox}
        type="checkbox"
        onChange={handleToggleChange}
        checked={isSelected || isCompleted}
      />

      {isLoading && (
        <div className={s.loader}>
          <Loader height="25" color="#5679D7" />
        </div>
      )}

      <span className={classNames(s.slider, s.round)}>
        <CheckSymbol className={s.check_symbol} width="10" height="10" />
        <Attention className={s.attention} width="5" height="12" />
      </span>
    </label>
  );
};

TaskToggle.propTypes = {
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default TaskToggle;
