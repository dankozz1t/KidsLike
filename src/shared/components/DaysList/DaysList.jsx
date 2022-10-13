import React, { useMemo, useRef } from 'react';
import { useState } from 'react';
import s from './DaysList.module.scss';
import CheckBox from 'shared/components/CheckBox/CheckBox.jsx';
import { useDispatch } from 'react-redux';
import { addTaskToProvidedDaysThunk } from 'redux/task/task.thunk';
import Loader from '../Loader';

const DaysList = ({ _id, daysList, setShow }) => {
  const [selectedRadio, setSelectedRadio] = useState(daysList);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = event => {
    setIsLoading(true);
    const { name } = event.target;

    const isCheckedArray = selectedRadio.map(day => {
      const newDay = { ...day };

      if (newDay.day === name) {
        newDay.isChecked = !newDay.isChecked;
      }
      return newDay.isChecked;
    });

    dispatch(
      addTaskToProvidedDaysThunk({
        id: _id,
        body: {
          days: isCheckedArray,
        },
      })
    )
      .unwrap()
      .then(() => {
        setSelectedRadio(prevState =>
          prevState.map(item =>
            item.day === name ? { ...item, isChecked: !item.isChecked } : item
          )
        );

        setShow(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={s.box}>
      {isLoading && (
        <div className={s.loader}>
          <Loader width="25" />
        </div>
      )}

      <ul className={s.items}>
        {selectedRadio.map(({ day, isChecked, isDisabled }) => (
          <li key={day} className={s.item}>
            <CheckBox
              id={day}
              name={day}
              value={day}
              label={day}
              checked={isChecked}
              disabled={isDisabled}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysList;
