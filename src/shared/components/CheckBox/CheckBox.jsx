import React from 'react';
import styles from './CheckBox.module.scss';

const CheckBox = ({ value, label, checked, id, onChange, disabled }) => {
  return (
    <div className={styles.box}>
      <label htmlFor={id} className={styles.label}>
        <input
          id={id}
          name={id}
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
