import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('phonebook/changeFilter');

const actions = { changeFilter };

export default actions;
