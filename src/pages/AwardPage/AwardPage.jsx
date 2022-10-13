import React from 'react';
import { useState } from 'react';
import { getGifts, getBuyedGiftsIds } from '../../redux/gift/gift.selector';
import Modal from 'shared/components/Modal';
import ModalContentGetGifts from 'shared/components/ModalContentGetGifts';
import AwardHead from 'modules/AwardHead';
import AwardList from 'modules/AwardList';
import CardsList from 'shared/components/CardsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGiftsThunk, buyGiftsThunk } from '../../redux/gift/gift.thunk';

const AwardPage = () => {
  const dispatch = useDispatch();
  const gifts = useSelector(getGifts);
  const buyedGiftsIds = useSelector(getBuyedGiftsIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getGiftsThunk());
  }, [dispatch]);

  return (
    <>
      <AwardHead />
      {/* <CardsList tasks={} /> */}
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
