import React from 'react';

import s from './CardTitle.module.scss';

const CardTitle = ({ title }) => (
  <div>
    <span className={title}>{title}</span>
  </div>
);

export default CardTitle;