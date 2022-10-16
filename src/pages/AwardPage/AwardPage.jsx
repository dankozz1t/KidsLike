import React,{ useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getGifts, getBoughtGiftsIds } from 'redux/gift/gift.selector';
import { getGiftsThunk, buyGiftsThunk } from 'redux/gift/gift.thunk';
import { refreshBoughtGiftsIds } from 'redux/gift/gift.slice';
import { getBalance } from 'redux/task/task.selector';

import AwardHead from 'modules/AwardHead';
import Modal from 'shared/components/Modal';

import ModalContentGetGifts from 'shared/components/ModalContentGetGifts';
import Button from 'shared/components/Button';
import CardsList from 'shared/components/CardsList';

import { toast } from 'react-toastify';

import s from './AwardPage.module.scss';
import CardListLoader from 'shared/components/CardListLoader';
import { useMediaQuery } from 'react-responsive';
import PlanningPoints from 'shared/components/PlanningPoints/PlanningPoints';

const AwardPage = () => {
  const boughtGiftsIds = useSelector(getBoughtGiftsIds, shallowEqual);
  const balance = useSelector(getBalance, shallowEqual);
  const gifts = useSelector(getGifts, shallowEqual);

  const [dataForModal, setDataForModal] = useState([]);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch();

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
      {gifts.length ? <CardsList tasks={gifts} /> : <CardListLoader />}
      <div className={s.button}>
        <Button children={'Confirm'} onClick={buyHandler} />
      </div>
      <Modal open={open} onClose={handleModalClose}>
        <ModalContentGetGifts awards={dataForModal} />
      </Modal>
      {isMobile && <PlanningPoints/>}
    </div>
  );
};

export default AwardPage;
