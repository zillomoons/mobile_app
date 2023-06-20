import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { navReducer, authReducer, profileReducer, stationsReducer } from './reducers';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  auth: authReducer,
  nav: navReducer,
  profile: profileReducer,
  stations: stationsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;