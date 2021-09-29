import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
 key: 'root',
 storage: storage,
};

const store =  configureStore({
  reducer: {
    weather: persistReducer(persistConfig,weatherReducer)
  },

})

export default store;

