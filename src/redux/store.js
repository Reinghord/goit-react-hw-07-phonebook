import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: { contacts: contactsSlice.reducer, filter: filterSlice.reducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
