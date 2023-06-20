import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import theme from '../../styles/theme.style';

type PrimaryBtnTypes = {
  text: string;
  onPress: () => void;
};
//use instead of Pressable --> TouchableOpacity
const PrimaryButton = ({ text, onPress }: PrimaryBtnTypes) => {
  return (
    <View style={styles.primaryButton}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedBtn}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 50,
    width: '60%',
    marginVertical: 15,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontWeight: '800',
    letterSpacing: 2,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  pressedBtn: {
    opacity: 0.5,
  },
});
