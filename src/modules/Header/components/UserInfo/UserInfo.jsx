import React from 'react';
import Loader from 'shared/components/Loader';

import s from './UserInfo.module.scss';

const UserInfo = ({ email }) => {
  if (!email) {
    return <Loader width="60" height="20" color="#3e7adc" />;
  }

  return (
    <>
      <div className={s.char}>{email[0].toUpperCase()}</div>
      <p className={s.emailtext}>{email}</p>
    </>
  );
};

export default UserInfo;
