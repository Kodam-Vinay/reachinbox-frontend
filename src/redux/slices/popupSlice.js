import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "theme",
  initialState: {
    isPopupOpen: false,
  },
  reducers: {
    togglePopup: (state, action) => {
      state.isPopupOpen = action.payload;
    },
  },
});
export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
