import React from 'react';
import { useState } from 'react';
import { getGifts, getBuyedGiftsIds } from '../../redux/gift/gift.selector';
import Modal from 'shared/components/Modal';
import ModalContentGetGifts from 'shared/components/ModalContentGetGifts';
import AwardHead from 'modules/AwardHead';
import AwardList from 'modules/AwardList';
import CardsList from 'shared/components/CardsList';
import { useSelector } from 'react-redux';

const AwardPage = () => {
  const [open, setOpen] = useState(false);
  const gifts = useSelector(getGifts);
  const buyedGiftsIds = useState(getBuyedGiftsIds);

  return (
    <>
      <AwardHead />
      <CardsList tasks={} />
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentGetGifts />
      </Modal>
    </>
  );
};

export default AwardPage;
