import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hn: [],
  vinh: [],
  hcm: [],

  timelog: 0,
};
const DELAY = 12000;

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    refreshHN: (state, action) => {
      if (Date.now() - state.timelog > DELAY) {
        state.hn = action.payload;
      }
    },
    refreshVinh: (state, action) => {
      if (Date.now() - state.timelog > DELAY) {
        state.vinh = action.payload;
      }
    },
    refreshHCM: (state, action) => {
      if (Date.now() - state.timelog > DELAY) {
        state.hcm = action.payload;
        state.timelog = Date.now();
      }
    },
  },
});



export const { refresh } = weatherSlice.actions;

export default weatherSlice.reducer;
