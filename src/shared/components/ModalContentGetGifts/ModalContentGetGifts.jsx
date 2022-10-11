import React from 'react';
// import { useState } from 'react';
// import Modal from 'shared/components/Modal';
import modalcat from 'assets/images/modal-image/modal-cat.png';
import s from './ModalContentGetGifts.module.scss';


const ModalContentGetGifts = () => {

    const modalTitle = <h1 className={s.modalTitle}>Congratulations! You get:</h1>
  const awards = [
    { image: '#/https', name: 'sweets' },
    { image: '#/https', name: 'movie date' },
    { image: '#/https', name: 'present' },
    { image: '#/https', name: 'PARTY WITH FRIENDS' },
  ];
  

  let awardsList = awards.map((award) => <li className={s.awardItem}>
  <div  className={s.awardImage}>{award.image}</div>  
    <p className={s.awardName}>{award.name}</p>
  </li>);
    
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