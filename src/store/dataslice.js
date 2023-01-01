import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "active",
  initialState: {
    branch: "",
    sem: 0,
    brSelected: false
  },
  reducers: {
    branchChange(state, action) {
      state.branch = action.payload;
      state.sem = 0;
      state.brSelected = true;
    },
    semChange(state, action) {
      state.sem = action.payload;
    }
  }
});
export const datachange = dataSlice.actions;
export default dataSlice;
