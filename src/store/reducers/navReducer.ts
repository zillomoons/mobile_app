import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    }
  },
});

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions;

//Selectors
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selecDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInfo = (state: RootState) => state.nav.travelTimeInfo;

export default navSlice.reducer;

