import React from 'react';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';

const Card = ({ ...task }) => {
  const { imgUrl, ...taskInfo } = task;
  const { title } = taskInfo;


  return (
    <article>
      <CardBody img={imgUrl} alt={title} />
      <CardFooter {...taskInfo} />
    </article>
  );
};

export default Card;