import React from 'react';
import Skeleton from '../Skeleton';

import s from './CardsListLoader.module.scss';

const CardListLoader = ({ amount = 12 }) => {
  return (
    <ul className={s.cards_list}>
      {[...Array(amount)].map((_, i) => (
        <li key={i} className={s.card_item}>
          <article>
            <Skeleton className={s.card__image} />
            <Skeleton
              className={s.card_footer}
              gradient="linear-gradient(90deg, #f8d99c, #ffbc33, #f8d99c)"
            />
          </article>
        </li>
      ))}
    </ul>
  );
};
export default CardListLoader;
