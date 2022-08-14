import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import actions from 'redux/phonebook/phonebook-actions';
import { getEntities, getFilter } from 'redux/phonebook/phonebook-selectors';
import {
  fetchContacts,
  deleteContacts,
} from 'redux/phonebook/phonebook-operations';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getEntities);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const onDelete = async id => {
    await dispatch(deleteContacts(id));
    dispatch(fetchContacts());
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(contact => {
            return (
              <li className={s.item} key={contact.id}>
                {contact.name}: {contact.phone}{' '}
                <button
                  className={s.button}
                  onClick={() => {
                    onDelete(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

// ContactList.propTypes = {
//   appState: PropTypes.object.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
