import React from 'react';
import { ReactComponent as MailIcon } from 'assets/images/icon/icon-mail.svg';
import { ReactComponent as TelegramIcon } from 'assets/images/icon/icon-telegram.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/icon/icon-linkedin.svg';
import { ReactComponent as GithubIcon } from 'assets/images/icon/icon-github.svg';

import s from './ContactItem.module.scss';

const ContactItem = ({ item }) => {
  return (
    <li className={s.wrapper}>
      <img className={s.img} src={item.photo} alt="our teammate" />
      <div className={s.description}>
        <p className={s.name}>
          {item.firstName} {item.lastName}
        </p>
        <p className={s.position}>{item.position}</p>
        <p className={s.about}>{item.about}</p>
      </div>
      <ul className={s.socialList}>
        <li>
          <a href={item.socialLinks.email} className={s.socialListItem}>
            <MailIcon className={s.icon} />
          </a>
        </li>
        <li>
          <a href={item.socialLinks.telegram} className={s.socialListItem}>
            <TelegramIcon className={s.icon} />
          </a>
        </li>
        <li>
          <a href={item.socialLinks.linkedIn} className={s.socialListItem}>
            <LinkedinIcon className={s.icon} />
          </a>
        </li>
        <li>
          <a href={item.socialLinks.gitHub} className={s.socialListItem}>
            <GithubIcon className={s.icon} />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ContactItem;
