import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import { SignIn, SignUp, ForgotPass, ResetPassword } from '../screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { selectIsSignedIn } from '../store';
import BottomTabNavigator from './BottomTabNavigator';

export const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name='HomeStack'
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name='SignIn' component={SignIn} />
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='ForgotPass' component={ForgotPass} />
              <Stack.Screen name='ResetPass' component={ResetPassword} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
