import React from 'react';

import CheckBox from 'shared/components/CheckBox';

import s from './DaysList.module.scss';

const DaysList = ({ onChange, selectedRadio, _id }) => {
  return (
    <div className={s.box}>
      <ul className={s.items}>
        {selectedRadio.map(({ day, isChecked, isDisabled }) => (
          <li key={day} className={s.item}>
            <CheckBox
              id={_id}
              name={day}
              value={day}
              label={day}
              checked={isChecked}
              disabled={isDisabled}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysList;
