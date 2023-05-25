import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { removeContacts } from 'redux/phonebook/phonebook-operations';
function ContactList() {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onDelete = id => dispatch(removeContacts(id));

  return (
    <>
      <ul>
        {contacts.length > 0 &&
          contacts
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
