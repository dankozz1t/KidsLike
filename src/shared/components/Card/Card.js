import React from 'react';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

const Card = ({ ...task }) => {
  const { imgName, ...taskInfo } = task;
  const { title } = taskInfo;

  return (
    <article>
      <CardBody img={imgName} alt={title} />
      <CardFooter {...taskInfo} />
    </article>
  );
};

export default Card;