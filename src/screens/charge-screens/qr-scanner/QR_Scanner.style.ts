import { StyleSheet } from 'react-native';
import theme from '../../../styles/theme.style';

export const qrStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BG,
  },
  instructions: {
    width: '65%',
    marginVertical: 25,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'center',
  },
});