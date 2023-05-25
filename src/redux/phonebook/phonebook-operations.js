import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockapi } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await mockapi.getContacts();
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ userName, number }, { rejectWithValue }) => {
    const contact = {
      name: userName,
      number,
    };
    try {
      const contacts = await mockapi.postContacts(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await mockapi.deleteContacts(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
