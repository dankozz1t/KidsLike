import React from 'react';

import img1 from '../../../assets/images/contacts/contact-1.jpg';
import img2 from '../../../assets/images/contacts/contact-2.jpg';
import img3 from '../../../assets/images/contacts/contact-3.jpg';
import img4 from '../../../assets/images/contacts/contact-4.jpg';
import img5 from '../../../assets/images/contacts/contact-5.jpg';
import img6 from '../../../assets/images/contacts/contact-6.jpg';

import s from './ContactItem.module.scss';

const ContactItem = ({ item }) => {
  const photos = [img1, img2, img3, img4, img5, img6];

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
    </li>
  );
};

export default ContactItem;
