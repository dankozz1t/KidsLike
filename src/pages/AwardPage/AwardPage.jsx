import React from 'react';
import { useState } from 'react';
import Modal from 'shared/components/Modal';
import modalcat from 'image/modal-image/modal-cat.png';
import s from './AwardPage.module.scss';

const AwardPage = () => {
    const [open, setOpen] = useState(false);

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
      <h1>AwardPage</h1>
      <button type='button' onClick={() => setOpen(true)} >Open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={s.container}>
          {<img className={s.modalcat} src={modalcat} alt="modalcat" />}
          {modalTitle}
          <ul className={s.awardList}>{awardsList}</ul>
        </div>
      </Modal>
    </>
  );
};

export default AwardPage;

