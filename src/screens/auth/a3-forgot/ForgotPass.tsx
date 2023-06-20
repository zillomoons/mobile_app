import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Logo, CustomInput, PrimaryButton } from '../../../components';

import { authStyles } from '../styles';

const ForgotPass = React.memo(() => {
  const [email, setEmail] = useState('');

  const onSendEmail = () => console.log(email);

  return (
    <View style={authStyles.container}>
      <Logo />
      <Text style={authStyles.heading}>Forgot your password?</Text>
      <Text style={authStyles.subheading}>
        Confirm your email and we'll send you instructions
      </Text>
      <View style={authStyles.loginContainer}>
        <CustomInput
          label='email'
          pass={false}
          value={email}
          onChange={setEmail}
        />
      </View>
      <PrimaryButton text='send' onPress={onSendEmail} />
    </View>
  );
});

export default ForgotPass;
