import React from 'react';
import s from './CardTitle.module.scss'

const CardTitle = ({title}) => {
  return (
  <div>
    <span className={s.card_title}>{title}</span>
  </div>
)};

export default CardTitle;