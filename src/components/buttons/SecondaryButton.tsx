import { StyleSheet, View, Pressable, Text } from 'react-native';
import theme from '../../styles/theme.style';

type SecondaryBtnPropsTypes = {
  text: string;
  onPress: () => void;
};

const SecondaryButton = ({ text, onPress }: SecondaryBtnPropsTypes) => {
  return (
    <View style={styles.secondaryButton}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedBtn}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: '60%',
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    marginVertical: 15,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  pressedBtn: { opacity: 0.5 },
  buttonText: {
    color: theme.PRIMARY_COLOR,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
