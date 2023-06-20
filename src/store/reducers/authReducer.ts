import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isSignedIn: true
  },
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    }
  }
});

export const { setIsSignedIn } = authSlice.actions;

//Selectors
export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;

export default authSlice.reducer;
