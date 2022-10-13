import React from 'react';
import { useState } from 'react';
import s from './DaysList.module.scss';
import CheckBox from 'shared/components/CheckBox/CheckBox.jsx';

const DaysList = ({ daysList }) => {
  const [selectedRadio, setSelectedRadio] = useState(daysList);

  const handleChange = event => {
    const { name } = event.target;

    setSelectedRadio(prevstate =>
      prevstate.map(item =>
        item.day === name ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className={s.box}>
      <ul className={s.items}>
        {selectedRadio.map(({ day, status }) => (
          <li key={day} className={s.item}>
            <CheckBox
              id={day}
              name={day}
              value={day}
              label={day}
              checked={status}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysList;
