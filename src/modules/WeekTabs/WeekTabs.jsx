import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'shared/components/Loader';

import s from './WeekTabs.module.scss';

const WeekTabs = ({ weekDays }) => {
  const currentWeekDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRadio, setSelectedRadio] = useState(
    searchParams.get('day') || currentWeekDay
  );

  const isRadioSelected = value => selectedRadio === value;

  useEffect(
    () => {
      setSearchParams({ day: selectedRadio });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChange = event => {
    const { value } = event.target;
    setSearchParams({ day: value });
    setSelectedRadio(value);
  };

  const data = weekDays.length ? (
    <ul className={s.weekTabs}>
      {weekDays.map(day => (
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
  ) : (
    <Loader width="229" color="#5679D7" />
  );

  return <div className={s.box}>{data}</div>;
};

export default WeekTabs;
