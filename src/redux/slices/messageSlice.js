import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "theme",
  initialState: {
    activeMessage: null,
    allMessages: [],
  },
  reducers: {
    storeActiveMessage: (state, action) => {
      state.activeMessage = action.payload;
    },
    storeAllMessages: (state, action) => {
      state.allMessages = action.payload;
    },
  },
});
export const { storeActiveMessage, storeAllMessages } = messageSlice.actions;
export default messageSlice.reducer;
