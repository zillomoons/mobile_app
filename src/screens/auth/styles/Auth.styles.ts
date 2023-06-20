import { StyleSheet } from "react-native";
import theme from '../../../styles/theme.style';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BG
  },
  loginContainer: {
    justifyContent: 'flex-start',
    marginBottom: 30,
    width: '65%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15
  },
  subheading: {
    width: '65%',
    marginBottom: 15,
  },
  forgotText: {
    width: '100%',
    textAlign: 'right',
    opacity: 0.7,
  },
  authLink: {
    flexDirection: 'row',
    marginTop: 35,
  },
  link: {
    color: theme.PRIMARY_COLOR,
    marginHorizontal: 5,
  },
});

export default authStyles;