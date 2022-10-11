import React from 'react';

const CardBody = ({ img, alt}) => (
  <img 
  className="card__image" 
  src={img}
  alt={alt} />
);

export default CardBody;