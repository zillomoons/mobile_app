import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme.style';

const chargeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '25%',
    marginVertical: 35,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  chargingStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 3,
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: theme.LIGHT_GREY,
  },
  chargeBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: theme.RED,
    marginVertical: 15
  },
  infoBox: {
    backgroundColor: theme.LIGHT_GREEN,
    borderRadius: 8,
    padding: 15,
    width: '50%'
  },
  infoHeading: {
    fontWeight: '700',
    fontSize: 18,
    color: theme.DARK_GREY,
    marginBottom: 15,
  },
  infoTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.ORANGE_COLOR,
  },
  infoIcon: {
    fontSize: 32,
    color: theme.SAGE
  }

});

export default chargeStyles;