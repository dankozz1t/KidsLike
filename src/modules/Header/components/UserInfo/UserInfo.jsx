import React from 'react';
import s from './UserInfo.module.scss';

const UserInfo = ({ email }) => {
  let firstChar = email[0].toUpperCase();
  return (
    <>
      <div className={s.char}>{firstChar} </div>
      <p className={s.emailtext}>{email}</p>
    </>
  );
};

export default UserInfo;
