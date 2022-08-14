import { useState } from 'react';
import {
  usePostContactByIdMutation,
  useGetAllContactsQuery,
} from 'services/mock-api';
import s from './ContactForm.module.css';

function ContactForm() {
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [postContacts] = usePostContactByIdMutation();
  const { data: contacts } = useGetAllContactsQuery();

  const onHandle = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === userName)) {
      return alert(`${userName} is already in contacts.`);
    }
    postContacts({ name: userName, phone: number });
    setUserName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onHandleSubmit}>
      {' '}
      <label className={s.label} htmlFor="name">
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="userName"
        value={userName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onHandle}
      />
      <label className={s.label} htmlFor="number">
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onHandle}
      />
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
export default ContactForm;
