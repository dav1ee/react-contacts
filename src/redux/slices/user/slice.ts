import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserSliceState, UserType } from './types';

const initialState: UserSliceState = {
  name: null,
  password: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.isAuth = true;
    },

    logout: (state) => {
      state.name = null;
      state.password = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
