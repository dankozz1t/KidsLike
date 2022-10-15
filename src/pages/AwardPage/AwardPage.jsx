import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGifts, getBoughtGiftsIds } from '../../redux/gift/gift.selector';
import { getGiftsThunk, buyGiftsThunk } from '../../redux/gift/gift.thunk';
import { refreshBoughtGiftsIds } from 'redux/gift/gift.slice';
import Modal from 'shared/components/Modal';
import ModalContentGetGifts from 'shared/components/ModalContentGetGifts';
import AwardHead from 'modules/AwardHead';
import CardsList from 'shared/components/CardsList';
import Button from 'shared/components/Button';
import s from './AwardPage.module.scss';
import { getBalance } from 'redux/task/task.selector';

const AwardPage = () => {
  const dispatch = useDispatch();
  const gifts = useSelector(getGifts);
  const boughtGiftsIds = useSelector(getBoughtGiftsIds);
  const balance = useSelector(getBalance);
  const [open, setOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState([]);

  useEffect(() => {
    dispatch(getGiftsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (boughtGiftsIds.length > 0) {
      setDataForModal(
        gifts.reduce((acc, gift) => {
          if (boughtGiftsIds.includes(gift.id)) {
            return [...acc, { image: gift.imageUrl, name: gift.title }];
          }
          return acc;
        }, [])
      );
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boughtGiftsIds]);

  const buyHandler = () => {
    const selectedGiftsIds = gifts.reduce((acc, gift) => {
      if (gift.isSelected) {
        return [...acc, gift.id];
      }
      return acc;
    }, []);

    if (selectedGiftsIds.length > 0) {
      const totalPrice = gifts.reduce((acc, gift) => {
        if (gift.isSelected) {
          return acc + gift.price;
        }
        return acc;
      }, 0);
      console.log(totalPrice);
      console.log(balance);

      if (balance >= totalPrice) {
        dispatch(buyGiftsThunk({ giftIds: selectedGiftsIds }));
      } else {
        toast.error('Not enough points to make a purchase!');
      }
    } else {
      toast.info('Nothing is selected!');
    }
  };

  const handleModalClose = () => {
    const refreshedGifts = gifts.reduce((acc, gift) => {
      return [...acc, { ...gift, isSelected: false }];
    }, []);
    dispatch(refreshBoughtGiftsIds(refreshedGifts));
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <AwardHead />
      <CardsList tasks={gifts} />
      <div className={s.button}>
        <Button children={'Confirm'} onClick={buyHandler} />
      </div>
      <Modal open={open} onClose={handleModalClose}>
        <ModalContentGetGifts awards={dataForModal} />
      </Modal>
    </div>
  );
};

export default AwardPage;
