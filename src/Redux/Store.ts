import {configureStore} from '@reduxjs/toolkit';
import LoginReducer, {loginApi} from '../Screen/Login/Login.reducer';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    LoginReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApi.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
