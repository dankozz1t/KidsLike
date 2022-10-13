import React from 'react';
import ContactList from 'modules/ContactList';
import s from './ContactPage.module.scss';
import Footer from 'modules/Footer';

const ContactPage = () => {
  return (
    <>
      <h1 className={s.title}>Our team</h1>
      <h2 className={s.slogan}>Always ready for new challenges!</h2>
      <ContactList />
      <Footer />
    </>
  );
};

export default ContactPage;
