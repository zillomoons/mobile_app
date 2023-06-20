import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../styles/theme.style';

const LogoutButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('LOGOUT')}
    >
      <Ionicons name='md-exit-outline' style={styles.exitIcon} />
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  exitIcon: {
    color: theme.PRIMARY_COLOR,
    fontSize: 36,
    marginRight: 15,
  },
});
