import React from 'react';
import ContactItem from './ContactItem';
import contactList from './Contacts.json';

import s from './ContactList.module.css';

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
