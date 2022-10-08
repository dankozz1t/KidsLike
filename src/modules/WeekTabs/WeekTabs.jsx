import { useState } from 'react';
import s from './WeekTabs.module.scss';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function WeekTabs() {
  const [selectedRadio, setSelectedRadio] = useState('Monday');

  const isRadioSelected = value => selectedRadio === value;

  const handleChange = event => {
    const { value } = event.target;
    setSelectedRadio(value);
  };

  return (
    <div className={s.box}>
      <ul className={s.weekTabs}>
        {daysOfWeek.map(day => (
          <li className={s.weekTabs__item} key={day}>
            <input
              id={day}
              type="radio"
              name="dayOfWeek"
              value={day}
              checked={isRadioSelected(day)}
              onChange={handleChange}
              className={s.weekTabs__input}
            />
            <label htmlFor={day} className={s.weekTabs__label}>
              <span className={s.weekTabs__name}>{day}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeekTabs;
