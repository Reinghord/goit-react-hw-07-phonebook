import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  fetchContacts,
  removeContacts,
} from './phonebook-operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.data = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action;
    },
    [addContacts.pending](state, _) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, { payload }) {
      state.data.push(payload);
      state.isLoading = false;
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action;
    },
    [removeContacts.pending](state, _) {
      state.isLoading = true;
    },
    [removeContacts.fulfilled](state, { payload }) {
      state.data = state.data.filter(({ id }) => id !== payload.id);
      state.isLoading = false;
    },
    [removeContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { changeFilter: (_, action) => action.payload },
});

export const { changeFilter } = filterSlice.actions;
