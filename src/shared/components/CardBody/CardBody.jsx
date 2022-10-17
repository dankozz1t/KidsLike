import React from 'react';
import PropTypes from 'prop-types';
import s from './CardBody.module.scss';

const CardBody = ({ img, alt }) => (
  <img className={s.card__image} src={img} alt={alt} />
);

CardBody.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardBody;
