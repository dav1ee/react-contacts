import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { ContactsSliceState, ContactType } from './types';

const initialState: ContactsSliceState = {
  items: [],
  totalCount: 0,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<ContactType>) => {
      state.items.push(action.payload);
      state.totalCount += 1;
    },

    updateContact: (state, action: PayloadAction<ContactType>) => {
      const user = state.items.filter((obj) => obj.id === action.payload.id)[0];

      user.firstName = action.payload.firstName;
      user.lastName = action.payload.lastName;
      user.email = action.payload.email;
      user.phoneNumber = action.payload.phoneNumber;
    },

    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalCount -= 1;
    },
  },
});

export const getContactByIdSelector = (id: number | null) => (state: RootState) => {
  return state.contacts.items.filter((obj) => obj.id === id);
};

export const { createContact, updateContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
