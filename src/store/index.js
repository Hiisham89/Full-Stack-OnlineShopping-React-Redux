import { configureStore } from "@reduxjs/toolkit";
import uislice from "./UI-slice";
import cardslice from "./card-slice";

const store = configureStore({
  reducer: {
    uishowof: uislice,
    cardmanagement: cardslice,
  },
});
export default store;
