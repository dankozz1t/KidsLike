import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations-contact';
import s from './Form.module.css';
import { toast } from 'react-toastify';
import { selectContact } from 'redux/contacts/selector-contacts';
import Button from '@mui/material/Button';

// const shortid = require('shortid');

const Form = () => {
  const [name, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleChangeUser = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setUserName(value);
        // eslint-disable-next-line
        break;

      case 'number':
        setNumber(value);
        // eslint-disable-next-line
        break;

      default:
        return;
    }
  };

  const handleAddUser = e => {
    e.preventDefault();

    const hasUserContacts = contacts.some(user => user.name === name);

    if (hasUserContacts) {
      toast.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setNumber('');
    setUserName('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleAddUser}>
        <label>
          <span className={s.label}>Name</span>
          <input
            className={s.input}
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Tel</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeUser}
          />
        </label>

        <Button
          disabled={name && number ? false : true}
          variant="contained"
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </>
  );
};

export default Form;
