import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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

// const QUERY_DAY = 'day';

const WeekTabs = () => {
  const currentWeekDay =  new Date().toLocaleString('en-US',{weekday: 'long'});
  const [selectedRadio, setSelectedRadio] = useState(currentWeekDay);
  const [searchParams, setSearchParams] = useSearchParams();

  const isRadioSelected = value => selectedRadio === value;

  useEffect(()=>{
      setSearchParams({day: currentWeekDay});
    }
  ,[])


  const handleChange = event => {
    const { value } = event.target;
    console.log(value)
    setSearchParams({day: value})
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
