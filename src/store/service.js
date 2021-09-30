import axios from "axios";


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