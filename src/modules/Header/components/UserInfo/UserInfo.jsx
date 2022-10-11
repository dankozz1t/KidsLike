import React from 'react';
import s from './UserInfo.module.scss';

const UserInfo = ({ email }) => <p className={s.emailtext}>{email}</p>;

export default UserInfo;
