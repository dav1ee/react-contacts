import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userReducer from './slices/user/slice';
import contactsReducer from './slices/contacts/slice';
import popupReducer from './slices/popup/slice';
import searchReducer from './slices/search/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
    popup: popupReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
