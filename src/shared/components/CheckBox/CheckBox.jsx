import React from 'react';
import styles from './CheckBox.module.scss';

const CheckBox = ({ value, label, checked, _id, onChange, disabled }) => {
  return (
    <div className={styles.box}>
      <label htmlFor={_id} className={styles.label}>
        <input
          id={_id}
          name={_id}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
          className={styles.input}
          disabled={disabled}
        />
        <span className={styles.icon}></span>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
