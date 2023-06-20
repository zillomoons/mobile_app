import { StyleSheet, View, Text, Modal, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import theme from '../../styles/theme.style';

const Settings = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
    </View>
  );
});

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BG,
  },
});
