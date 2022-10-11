import React from 'react';
import { useState } from 'react';
import Modal from 'shared/components/Modal';
import ModalContentGetGifts from 'shared/components/ModalContentGetGifts';

const AwardPage = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <h1>AwardPage</h1>
      <button type='button' onClick={() => setOpen(true)} >Open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentGetGifts/>
      </Modal>
    </>
  );
};

export default AwardPage;

