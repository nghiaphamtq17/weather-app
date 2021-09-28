import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hn: [],
  vinh: [],
  dn: [],

  timelog: 0,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    refreshHN: (state, action) => {
      if (Date.now() - state.timelog > 12000) {
        state.hn = action.payload;
        console.log("loading... HN ");
      }
    },
    refreshVinh: (state, action) => {
      if (Date.now() - state.timelog > 12000) {
        state.vinh = action.payload;
        console.log("loading ... Vinh");
      }
    },
    refreshDN: (state, action) => {
      if (Date.now() - state.timelog > 12000) {
        state.dn = action.payload;
        console.log("loading... DN");
        state.timelog = Date.now();
      }
    },
  },
});

export async function fetchHN(dispatch, getState) {
  const hn = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=a5d0f1415e7127264bfa9db7a73f772f`
  );
  dispatch({ type: "weather/refreshHN", payload: hn.data });
}

export async function fetchVinh(dispatch, getState) {
  const vinh = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=vinh&appid=a5d0f1415e7127264bfa9db7a73f772f`
  );
  dispatch({ type: "weather/refreshVinh", payload: vinh.data });
}

export async function fetchDN(dispatch, getState) {
  const dn = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=danang&appid=a5d0f1415e7127264bfa9db7a73f772f`
  );
  dispatch({ type: "weather/refreshDN", payload: dn.data });
}

export const { refresh } = weatherSlice.actions;

export default weatherSlice.reducer;
