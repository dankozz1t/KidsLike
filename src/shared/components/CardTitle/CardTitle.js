import React from 'react';
import s from './CardTitle.module.css';

const CardTitle = ({ task }) => (
  <div>
    <span className={s.card_title}>{task.title}</span>
  </div>
);

export default CardTitle;