import React from 'react';
import PropTypes from 'prop-types';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';

const Card = ({ ...task }) => {
  const { imageUrl, ...taskInfo } = task;
  const { title } = taskInfo;

  return (
    <article>
      <CardBody img={imageUrl} alt={title} />
      <CardFooter {...taskInfo} />
    </article>
  );
};

Card.propTypes = {
  task: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Card;
