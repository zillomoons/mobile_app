import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    height: 40,
    padding: 8,
  },
  stationImage: {
    width: 150,
    height: 120,
    marginRight: 20,
    borderRadius: 12,
  }
});