import { Image, View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CustomInput, PrimaryButton, Logo } from '../../../components';
import { RootStackParamList } from '../../../../types/types';
import { validateEmail } from '../../../utils';

import { authStyles } from '../styles';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = React.memo(({ navigation }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    if (validateEmail(email) && password) {
      console.log({ email, password });
      setEmail('');
      setPassword('');
    } else {
      console.log('Please add Correct Email and Pass');
    }
  };
  return (
    <View style={authStyles.container}>
      <Logo />
      <View style={authStyles.loginContainer}>
        <CustomInput
          label='email'
          pass={false}
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          label='password'
          pass={true}
          value={password}
          onChange={setPassword}
        />
        <Pressable onPress={() => navigation.navigate('ForgotPass')}>
          <Text style={authStyles.forgotText}>Forgot Password?</Text>
        </Pressable>
      </View>
      <PrimaryButton text='sign in' onPress={onSignIn} />
      <View style={authStyles.authLink}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={authStyles.link}>Sign up here.</Text>
        </Pressable>
      </View>
    </View>
  );
});

export default SignIn;
