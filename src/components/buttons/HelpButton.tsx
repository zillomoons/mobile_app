import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../styles/theme.style';

const HelpButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Help')}
    >
      <MaterialCommunityIcons name='help-box' style={styles.icon} />
      <Text>Help and Support</Text>
    </TouchableOpacity>
  );
};

export default HelpButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: { fontSize: 32, color: theme.PRIMARY_COLOR, marginRight: 18 },
});
