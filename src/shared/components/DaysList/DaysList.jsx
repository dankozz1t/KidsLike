import React, { useMemo } from 'react';
import { useState } from 'react';
import s from './DaysList.module.scss';
import CheckBox from 'shared/components/CheckBox/CheckBox.jsx';
import { useSelector } from 'react-redux';
import { getDates } from 'redux/auth/auth.selector';

const DaysList = ({ daysList }) => {
  const [selectedRadio, setSelectedRadio] = useState(daysList);

  const handleChange = event => {
    const { name } = event.target;

    setSelectedRadio(prevstate =>
      prevstate.map(item =>
        item.day === name ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div className={s.box}>
      <ul className={s.items}>
        {selectedRadio.map(({ day, isChecked }) => (
          <li key={day} className={s.item}>
            <CheckBox
              id={day}
              name={day}
              value={day}
              label={day}
              checked={isChecked}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysList;
