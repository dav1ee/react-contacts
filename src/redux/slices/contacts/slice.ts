import { createSlice } from '@reduxjs/toolkit';

import { ContactsSliceState } from './types';

const initialState: ContactsSliceState = {
  items: [
    {
      id: 1,
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'email@gmail.com',
      phoneNumber: 88005553535,
    },
  ],
  totalCount: 1,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export default contactsSlice.reducer;
