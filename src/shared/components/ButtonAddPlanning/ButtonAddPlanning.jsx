import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addTaskToProvidedDaysThunk } from 'redux/task/task.thunk';
import { getDaysList } from 'redux/task/task.selector';

import { ReactComponent as IconOk } from 'assets/images/icon/icon-ok.svg';
import { ReactComponent as IconAdd } from 'assets/images/icon/icon-add.svg';

import DaysList from 'shared/components/DaysList';
import Loader from 'shared/components/Loader';

import s from './ButtonAddPlanning.module.scss';

const ButtonAddPlanning = ({ _id }) => {
  const daysList = useSelector(state => getDaysList(state, _id), shallowEqual);
  const dispatch = useDispatch();

  const [selectedRadio, setSelectedRadio] = useState(daysList);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = event => {
    const { value } = event.target;

    setSelectedRadio(prevState =>
      prevState.map(item =>
        item.day === value ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleIconAddClick = e => {
    if (!show) {
      return setShow(true);
    }
    setIsLoading(true);

    dispatch(
      addTaskToProvidedDaysThunk({
        id: _id,
        body: {
          days: selectedRadio.map(day => day.isChecked),
        },
      })
    )
      .unwrap()
      .then(() => {
        setShow(!show);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      {show && (
        <DaysList
          _id={_id}
          onChange={handleChange}
          selectedRadio={selectedRadio}
        />
      )}

      <button type="button" className={s.icon} onClick={handleIconAddClick}>
        {show ? <IconOk /> : <IconAdd />}
      </button>
      {isLoading && (
        <div className={s.loader}>
          <Loader width="25" height="7" color="#3e7adc" />
        </div>
      )}
    </div>
  );
};

export default ButtonAddPlanning;
