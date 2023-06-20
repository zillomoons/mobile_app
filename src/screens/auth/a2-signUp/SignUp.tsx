import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { CustomInput, PrimaryButton, Logo } from '../../../components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types/types';
import { authStyles } from '../styles';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = React.memo(({ navigation }: SignUpProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => console.log({ username, email, phone, password });

  return (
    <View style={authStyles.container}>
      <Logo />
      <View style={authStyles.loginContainer}>
        <CustomInput
          label='username'
          pass={false}
          value={username}
          onChange={setUsername}
        />
        <CustomInput
          label='email'
          pass={false}
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          label='phone number'
          pass={false}
          value={phone}
          onChange={setPhone}
        />
        <CustomInput
          label='password'
          pass={true}
          value={password}
          onChange={setPassword}
        />
      </View>
      <PrimaryButton text='sign up' onPress={onSignUp} />
      <View style={authStyles.authLink}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={authStyles.link}>Sign in here.</Text>
        </Pressable>
      </View>
    </View>
  );
});

export default SignUp;
