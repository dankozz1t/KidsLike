import React from 'react';
import Button from 'shared/components/Button';
import s from './ModalLogout.module.scss';
import { logoutAction } from 'redux/auth/auth.slice';
import { useDispatch } from 'react-redux';
import { token } from 'shared/service/http/http';

const ModalLogout = ({onClose}) => { 

  const dispatch = useDispatch();
  const hadleLogoutClick = () => {
    dispatch(logoutAction());
    token.unset();
  };

    return (       
        <div className={s.container}>
            <p>Are you sure ?</p>
            <div className={s.buttons}>
                <Button  onClick={onClose}>No</Button>
                <Button onClick={hadleLogoutClick}>Yes</Button>
            </div>
        </div>        
    );
};

export default ModalLogout;