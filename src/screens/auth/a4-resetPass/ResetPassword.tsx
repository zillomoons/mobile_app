import React from 'react';
import { View, Text } from 'react-native';

import { authStyles } from '../styles';

const ResetPassword = React.memo(() => {
  return (
    <View style={authStyles.container}>
      <Text>ResetPass screen</Text>
    </View>
  );
});

export default ResetPassword;
