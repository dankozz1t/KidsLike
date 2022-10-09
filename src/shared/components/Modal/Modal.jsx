import { useEffect } from "react";
import { useMemo } from "react";
import { createPortal } from "react-dom";
import s from './modal.module.scss';
import modalClose from 'image/modal-image/modal-close.svg';

const modalRootElement = document.querySelector("#modal");

const Modal = (props) => {
    const { open, onClose } = props;

    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        if (open) {
            window.addEventListener("keydown", handleEsc);
            modalRootElement.appendChild(element);
    
            return () => {
                modalRootElement.removeChild(element);
            };
        }
    });

    const handleEsc = (e) => e.code === "Escape" && onClose();
    const handleClick = (e) => e.target === e.currentTarget && onClose();
    const onBtnClose = () => onClose();

    if (open) {       
        return createPortal(
            <div className={s.modal_background} onClick = {handleClick} >
                <div className={s.modal_card}>
                    <img className={s.modal_close} onClick = {onBtnClose} src={modalClose} alt="modalClose" />
                    {props.children}
                </div>
            </div>,
            element);
    }
    return null;
};

export default Modal;