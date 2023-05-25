import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from 'redux/phonebook/phonebook-reducer';

function Filter() {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <label className={s.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilter}
      />
    </>
  );
}

export default Filter;
