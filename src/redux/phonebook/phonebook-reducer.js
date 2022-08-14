import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
import {
  fetchContacts,
  postContacts,
  deleteContacts,
} from './phonebook-operations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [postContacts.pending]: () => true,
  [postContacts.fulfilled]: () => false,
  [postContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [postContacts.rejected]: (_, action) => action.payload,
  [postContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.pending]: () => null,
});

// const contacts = createReducer([], {
//   [actions.add]: (state, action) => [...state, action.payload],
//   [actions.remove]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// // });

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
});
