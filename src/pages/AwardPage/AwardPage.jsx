import React from 'react';
import { useState } from 'react';
import { getGifts, getBoughtGiftsIds } from '../../redux/gift/gift.selector';
import Modal from 'shared/components/Modal';
import ModalContentGetGifts from 'shared/components/ModalContentGetGifts';
import AwardHead from 'modules/AwardHead';
import CardsList from 'shared/components/CardsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGiftsThunk, buyGiftsThunk } from '../../redux/gift/gift.thunk';

const AwardPage = () => {
  const dispatch = useDispatch();
  const gifts = useSelector(getGifts);
  const boughtGiftsIds = useSelector(getBoughtGiftsIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getGiftsThunk());
  }, [dispatch]);

  const buyHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <AwardHead />
      <CardsList tasks={gifts} />
      <button type="button" onClick={buyHandler}>
        Open
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContentGetGifts />
      </Modal>
    </>
  );
};

export default AwardPage;
