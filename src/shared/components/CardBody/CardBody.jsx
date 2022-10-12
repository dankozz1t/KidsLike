import React from 'react';
import s from './CardBody.module.scss'

const CardBody = ({ img, alt}) => (
  <img 
  className={s.card__image} 
  src={img}
  alt={alt} />
);

export default CardBody;