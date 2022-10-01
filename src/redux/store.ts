import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/slice';
import contactsReducer from './slices/contacts/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
