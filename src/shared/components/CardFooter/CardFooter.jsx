import React from 'react';
import CardTitle from '../CardTitle';
import PointAmount from '../PointAmount';
import s from './CardFooter.module.scss'

const CardFooter = ({ ...taskInfo }) => {
    const { title, reward } = taskInfo;

    return (
      <div className={s.card_footer}>
        <div>
          <CardTitle title={title} />
          <PointAmount point={reward} />
        </div>
      </div>
    );
  };
  
  export default CardFooter;