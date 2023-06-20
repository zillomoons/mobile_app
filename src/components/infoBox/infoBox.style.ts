import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const infoStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: theme.LIGHT_GREY,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: '90%',
    borderRadius: 10,
    marginTop: 50,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
    color: theme.MEDIUM_GREEN,
    fontSize: 20,
  },
  headingText: {
    fontSize: 18,
  },
  infoText: {
    marginTop: 15,
  },
  hideBtn: {
    alignSelf: 'flex-end',
  },
  hideText: {
    color: theme.LINK_BLUE,
  },
});


export default infoStyles;