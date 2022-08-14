import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import { mockApi } from 'services/mock-api';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    [mockApi.reducerPath]: mockApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

export default store;
