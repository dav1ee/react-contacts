import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PopupSliceState } from './types';

const initialState: PopupSliceState = {
  isOpen: false,
  isEditMode: false,
  id: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<PopupSliceState>) => {
      state.isOpen = action.payload.isOpen;
      state.isEditMode = action.payload.isEditMode;
      state.id = action.payload.id;
    },
  },
});

export const { setPopup } = popupSlice.actions;

export default popupSlice.reducer;
