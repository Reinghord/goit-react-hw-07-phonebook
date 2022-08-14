import { useSelector } from 'react-redux';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import {
  useGetAllContactsQuery,
  useRemoveContactByIdMutation,
} from 'services/mock-api';
import s from './ContactList.module.css';

function ContactList() {
  const filter = useSelector(getFilter);
  const [removeContact] = useRemoveContactByIdMutation();
  const { data } = useGetAllContactsQuery();

  return (
    <>
      <ul>
        {data &&
          data
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
                      removeContact(contact.id);
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

export default ContactList;
