import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./dataslice";

const store = configureStore({
  reducer: {
    active: dataSlice.reducer
  }
});
export default store;
