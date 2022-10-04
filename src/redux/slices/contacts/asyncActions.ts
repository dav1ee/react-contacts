import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ContactType } from './types';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (search: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ContactType[]>(
        search.length > 0
          ? `http://localhost:3001/contacts?firstName=${search}`
          : 'http://localhost:3001/contacts',
      );

      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (obj: ContactType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<ContactType>('http://localhost:3001/contacts', obj);

      return data;
    } catch (err) {
      const error = (err as Error).message;
      alert(error);

      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`http://localhost:3001/contacts/${id}`);

      return data;
    } catch (err) {
      const error = (err as Error).message;
      alert(error);

      return rejectWithValue(error);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (params: { id: number | null; contact: ContactType }, { rejectWithValue }) => {
    try {
      const { id, contact } = params;
      const { data } = await axios.patch<ContactType>(
        `http://localhost:3001/contacts/${id}`,
        contact,
      );

      return data;
    } catch (err) {
      const error = (err as Error).message;
      alert(error);

      return rejectWithValue(error);
    }
  },
);
