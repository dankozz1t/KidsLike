import React from 'react';

import img1 from '../../../assets/images/contacts/contact-1.jpg';
import img2 from '../../../assets/images/contacts/contact-2.jpg';
import img3 from '../../../assets/images/contacts/contact-3.jpg';
import img4 from '../../../assets/images/contacts/contact-4.jpg';
import img5 from '../../../assets/images/contacts/contact-5.jpg';
import img6 from '../../../assets/images/contacts/contact-6.jpg';
import img7 from '../../../assets/images/contacts/contact-7.jpg';

import { ReactComponent as MailIcon } from '../../../assets/images/icon/icon-mail.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/images/icon/icon-telegram.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/images/icon/icon-linkedin.svg';
import { ReactComponent as GithubIcon } from '../../../assets/images/icon/icon-github.svg';

import s from './ContactItem.module.scss';

const ContactItem = ({ item }) => {
  const photos = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <li className={s.wrapper}>
      <img src={photos[item.id - 1]} alt="our teammate" />
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
