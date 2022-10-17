import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import modalClose from 'assets/images/modal-image/modal-close.svg';

import s from './modal.module.scss';

const modalRootElement = document.querySelector('#modal');

const Modal = ({ children, onClose, open }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleEsc);
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  const handleEsc = e => e.code === 'Escape' && onClose();
  const handleClick = e => e.target === e.currentTarget && onClose();
  const onBtnClose = () => onClose();

  if (open) {
    return createPortal(
      <div className={s.modal_background} onClick={handleClick}>
        <div className={s.modal_card}>
          <img
            className={s.modal_close}
            onClick={onBtnClose}
            src={modalClose}
            alt="modalClose"
          />
          {children}
        </div>
      </div>,
      element
    );
  }
  return null;
};

export default Modal;
