import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/slice';
import contactsReducer from './slices/contacts/slice';
import popupReducer from './slices/popup/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
