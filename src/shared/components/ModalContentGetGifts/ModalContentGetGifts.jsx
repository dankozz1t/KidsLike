import React from 'react';
import modalcat from 'assets/images/modal-image/modal-cat.png';

import s from './ModalContentGetGifts.module.scss';

const ModalContentGetGifts = ({ awards }) => {
  return (
    <>
      <div className={s.container}>
        {<img className={s.modalcat} src={modalcat} alt="modalcat" />}
        <h1 className={s.modalTitle}>Congratulations! You get:</h1>

        <ul className={s.awardList}>
          {awards.map(award => (
            <li key={award.name} className={s.awardItem}>
              <img
                className={s.awardImage}
                src={award.image}
                alt={award.name}
              ></img>
              <p className={s.awardName}>{award.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ModalContentGetGifts;
