import { createSlice } from "@reduxjs/toolkit";

const initialState = { showcart: false, shownotification: null};
const uislice = createSlice({
  name: "hidden",
  initialState,
  reducers: {
    showcart(state) {
      state.showcart = !state.showcart;
    },
    shownotify(state, action) {
      state.shownotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    },
  },
});
export const uiactions = uislice.actions;
export default uislice.reducer;
