import { StyleSheet, View, Text, TextInput } from 'react-native';
import theme from '../../styles/theme.style';

type CustomInputTypes = {
  label: string;
  pass: boolean;
  value: string;
  onChange: (value: string) => void;
};

const CustomInput = ({ label, pass, value, onChange }: CustomInputTypes) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={pass}
        value={value}
        onChange={(e) => onChange(e.nativeEvent.text)}
        autoFocus
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 25,
  },
  label: {
    color: theme.PRIMARY_COLOR,
    marginBottom: 8,
    textTransform: 'uppercase',
    fontSize: theme.FONT_SIZE_SMALL,
  },
  input: {
    borderBottomColor: theme.PRIMARY_COLOR,
    borderBottomWidth: 1,
  },
});
