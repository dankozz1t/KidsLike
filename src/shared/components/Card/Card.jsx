import React from 'react';
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

export default Card;
