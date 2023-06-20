import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import manPhoto from '../../../assets/images/man.png'

const dummyUser: UserProfileType = {
    username: 'David',
    userId: 'someId',
    phoneNum: '+976610979',
    email: 'david545453@gmail.com',
    accountSum: 50000,
  photo: manPhoto,
  car: {
    brand: 'Nissan',
    model: 'Leaf',
    batterySize: 40
    }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: dummyUser
  },
  reducers: {

  }
});

export default profileSlice.reducer;

//Selectors
export const selectUser = (state: RootState) => state.profile.user; 
  
export type UserProfileType = {
  userId: string;
  username: string;
  email: string;
  phoneNum: string;
  accountSum: number;
  photo: string | null;
  car: CarType | null
};

export type CarType = {
  brand: string
  model: string
  batterySize: number
} 

