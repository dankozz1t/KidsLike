import React from 'react';
import PropTypes from 'prop-types';
import s from './CardTitle.module.scss'

const CardTitle = ({title}) => {
  return (
  <div>
    <span className={s.card_title}>{title}</span>
  </div>
)};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardTitle;