import React from 'react';
import modalcat from 'assets/images/modal-image/modal-cat.png';

import s from './ModalContentGetGifts.module.scss';

const ModalContentGetGifts = ({ awards }) => {
  const modalTitle = (
    <h1 className={s.modalTitle}>Congratulations! You get:</h1>
  );

  let awardsList = awards.map(award => (
    <li key={award.name} className={s.awardItem}>
      <img className={s.awardImage} src={award.image} alt={award.name}></img>
      <p className={s.awardName}>{award.name}</p>
    </li>
  ));

  return (
    <>
      <div className={s.container}>
        {<img className={s.modalcat} src={modalcat} alt="modalcat" />}
        {modalTitle}
        <ul className={s.awardList}>{awardsList}</ul>
      </div>
    </>
  );
};

export default ModalContentGetGifts;
