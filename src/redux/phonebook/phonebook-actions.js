import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const add = createAction('phonebook/Add', (submitName, submitNumber) => {
  return {
    payload: {
      id: nanoid(),
      name: submitName,
      number: submitNumber,
    },
  };
});

const remove = createAction('phonebook/Remove');

const changeFilter = createAction('phonebook/changeFilter');

const actions = { add, remove, changeFilter };

export default actions;
