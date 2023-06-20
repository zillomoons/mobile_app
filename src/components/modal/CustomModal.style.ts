import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  btnCancel: {
    backgroundColor: theme.PRIMARY_BG,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
  },
  btnSubmit: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: 80,
  },
  textCancel: {
    color: theme.PRIMARY_COLOR,
    fontWeight: '900',
  },
  textSubmit: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
  },
  modalText: {
    width: '100%',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default modalStyles;