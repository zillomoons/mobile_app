import { createSlice } from "@reduxjs/toolkit";
import { LatLng } from "react-native-maps";
import { RootState } from "../store";

const dummyStations: StationType[] = [
  {_id: 'someId2', title: 'Station 1', address: 'Some Street 1', coordinate: {latitude: 47.913, longitude: 106.920}, status: 'red', photo: null},
  {_id: 'someId1', title: 'Station 2', address: 'Some Street 2', coordinate: {latitude: 47.923, longitude: 106.933}, status: 'green', photo: null},
  {_id: 'someId13', title: 'Station 3', address: 'Some Street 3', coordinate: {latitude: 47.903, longitude: 106.912}, status: 'orange', photo: null},
  {_id: 'someId4', title: 'Station 4', address: 'Some Street 4', coordinate: {latitude: 47.916, longitude: 106.889}, status: 'green', photo: null},
  {_id: 'someId5', title: 'Station 5', address: 'Some Street 5', coordinate: {latitude: 47.924, longitude: 106.866}, status: 'orange', photo: null},
];

const initialState = {
  stations: dummyStations
}

const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {}
});

export default stationsSlice.reducer;

export type StationType = {
  _id: string
  title: string
  address: string
  coordinate: LatLng
  status: 'green' | 'red' | 'orange'
  photo: null | string
}

//Selectors
export const selectStations = (state: RootState) => state.stations.stations;


