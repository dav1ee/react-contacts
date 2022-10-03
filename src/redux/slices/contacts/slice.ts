import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchContacts, createContact, deleteContact, updateContact } from './asyncActions';

import { RootState } from '../../store';
import { ContactsSliceState, ContactType, Status } from './types';

const initialState: ContactsSliceState = {
  items: [],
  totalCount: 0,
  status: Status.LOADING,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContactAC: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    // FETCH CONTACTS
    builder.addCase(fetchContacts.pending, (state) => {
      state.items = [];
      state.totalCount = 0;
      state.status = Status.LOADING;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action: PayloadAction<ContactType[]>) => {
      state.items = action.payload;
      state.totalCount = state.items.length;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.items = [];
      state.totalCount = 0;
      state.status = Status.ERROR;
      state.error = action.payload as string;
    });

    // CREATE CONTACT
    builder.addCase(createContact.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(createContact.fulfilled, (state, action: PayloadAction<ContactType>) => {
      state.items.push(action.payload);
      state.totalCount = state.items.length;
      state.status = Status.SUCCESS;
    });

    builder.addCase(createContact.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.error = action.payload as string;
    });

    // DELETE CONTACT
    builder.addCase(deleteContact.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(deleteContact.fulfilled, (state) => {
      state.totalCount -= 1;
      state.status = Status.SUCCESS;
    });

    builder.addCase(deleteContact.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.error = action.payload as string;
    });

    // UPDATE CONTACT
    builder.addCase(updateContact.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(updateContact.fulfilled, (state, action: PayloadAction<ContactType>) => {
      const user = state.items.filter((obj) => obj.id === action.payload.id)[0];

      user.firstName = action.payload.firstName;
      user.lastName = action.payload.lastName;
      user.email = action.payload.email;
      user.phoneNumber = action.payload.phoneNumber;

      state.status = Status.SUCCESS;
    });

    builder.addCase(updateContact.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.error = action.payload as string;
    });
  },
});

export const getContactByIdSelector = (id: number | null) => (state: RootState) => {
  return state.contacts.items.filter((obj) => obj.id === id);
};

export const { deleteContactAC } = contactsSlice.actions;

export default contactsSlice.reducer;
