import React from 'react';
import ContactItem from './ContactItem';
import contactList from './Contacts.json';

import s from './ContactList.module.scss';

const ContactList = () => {
  const { contacts } = contactList;

  return (
    <ul className={s.contactList}>
      {contacts.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ContactList;
