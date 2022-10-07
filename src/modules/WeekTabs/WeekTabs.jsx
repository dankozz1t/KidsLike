import { useState } from 'react';
import classNames from 'classnames';
import s from './WeekTabs.module.css';

function WeekTabs() {
  // const [checkedRadio, setCheckedRadio] = useState('');
  // const [isChecked, setIsChecked] = useState(false);
  let currentRadio = false;

  const handleChange = event => {
    const { value, checked } = event.target;
    console.dir(event.target);
    // setCheckedRadio(value);
    // setIsChecked(checked);
    currentRadio = checked;
    // checked && event.target.style={{backgroundColor: rgb(255, 255, 255)}}
    console.log(value, checked);
  };

  const labelClassName = classNames({
    [s.weekTabs__label]: true,
    // [s.weekTabs__labelActive]: isChecked,
  });

  return (
    <div className={s.box}>
      <ul className={s.weekTabs}>
        <li className={s.weekTabs__item}>
          <input
            id="Monday"
            type="radio"
            name="dayOfWeek"
            value="Monday"
            // checked={checkedRadio === 'Monday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label
            htmlFor="Monday"
            className={
              currentRadio ? s.weekTabs__labelActive : s.weekTabs__label
            }
          >
            <span className={s.weekTabs__name}>Monday</span>
          </label>
        </li>
        <li className={s.weekTabs__item}>
          <input
            id="Tuesday"
            type="radio"
            name="dayOfWeek"
            value="Tuesday"
            // checked={checkedRadio === 'Tuesday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label htmlFor="Tuesday" className={s.weekTabs__label}>
            <span className={s.weekTabs__name}>Tuesday</span>
          </label>
        </li>
        <li className={s.weekTabs__item}>
          {/* <span className={s.weekTabs__name}>Wednesday</span> */}
          <input
            id="Wednesday"
            type="radio"
            name="dayOfWeek"
            value="Wednesday"
            // checked={checkedRadio === 'Wednesday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label htmlFor="Wednesday" className={labelClassName}>
            <span className={s.weekTabs__name}>Wednesday</span>
          </label>
        </li>
        <li className={s.weekTabs__item}>
          <input
            id="Thursday"
            type="radio"
            name="dayOfWeek"
            value="Thursday"
            // checked={checkedRadio === 'Thursday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label htmlFor="Thursday" className={labelClassName}>
            <span className={s.weekTabs__name}>Thursday</span>
          </label>
        </li>
        <li className={s.weekTabs__item}>
          <input
            id="Friday"
            type="radio"
            name="dayOfWeek"
            value="Friday"
            // checked={checkedRadio === 'Friday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label htmlFor="Friday" className={labelClassName}>
            <span className={s.weekTabs__name}>Friday</span>
          </label>
        </li>
        <li className={s.weekTabs__item}>
          <input
            id="Saturday"
            type="radio"
            name="dayOfWeek"
            value="Saturday"
            // checked={checkedRadio === 'Saturday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label htmlFor="Saturday" className={labelClassName}>
            <span className={s.weekTabs__name}>Saturday</span>
          </label>
        </li>
        <li className={s.weekTabs__item}>
          <input
            id="Sunday"
            type="radio"
            name="dayOfWeek"
            value="Sunday"
            // checked={checkedRadio === 'Sunday'}
            onChange={handleChange}
            className={s.weekTabs__input}
          />
          <label htmlFor="Sunday" className={labelClassName}>
            <span className={s.weekTabs__name}>Sunday</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default WeekTabs;

// const daysOfWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// function WeekTabs() {
//   const [checkedRadio, setCheckedRadio] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = event => {
//     const { value, checked } = event.target;
//     setCheckedRadio(value);
//     setIsChecked(checked);
//     console.log(value, checked);
//   };

//   const labelClassName = classNames({
//     [s.weekTabs__label]: true,
//     [s.weekTabs__labelActive]: isChecked,
//   });

//   return (
//     <div className={s.box}>
//       <ul className={s.weekTabs}>
//         {daysOfWeek.map((day) => (
//           <li className={s.weekTabs__item} key={day}>
//             <label className={labelClassName}>
//               <span className={s.weekTabs__name}>{day}</span>
//               <input
//                 type="radio"
//                 name="dayOfWeek"
//                 value={day}
//                 checked={checkedRadio === day}
//                 onChange={handleChange}
//                 className={s.weekTabs__input}
//               />
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default WeekTabs;
