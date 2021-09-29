import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hn: [],
  vinh: [],
  hcm: [],

  timelog: 0,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    refreshHN: (state, action) => {
      if (Date.now() - state.timelog > 1000) {
        state.hn = action.payload;
        console.log("loading... HN ");
      }
    },
    refreshVinh: (state, action) => {
      if (Date.now() - state.timelog > 1000) {
        state.vinh = action.payload;
        console.log("loading ... Vinh");
      }
    },
    refreshHCM: (state, action) => {
      if (Date.now() - state.timelog > 1000) {
        state.hcm = action.payload;
        console.log("loading... HCM");
        state.timelog = Date.now();
      }
    },
  },
});

export async function fetchHN(dispatch, getState) {
  const hn = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?id=1581129&appid=a5d0f1415e7127264bfa9db7a73f772f`
  );
  dispatch({ type: "weather/refreshHN", payload: hn.data });
}

export async function fetchVinh(dispatch, getState) {
  const vinh = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?id=1562693&appid=a5d0f1415e7127264bfa9db7a73f772f
    
    `
  );
  dispatch({ type: "weather/refreshVinh", payload: vinh.data });
}

export async function fetchHCM(dispatch, getState) {
  const hcm = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?id=1580578&appid=a5d0f1415e7127264bfa9db7a73f772f`
  );
  dispatch({ type: "weather/refreshHCM", payload: hcm.data });
}

export const { refresh } = weatherSlice.actions;

export default weatherSlice.reducer;
