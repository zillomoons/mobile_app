import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ChargeInProgress,
  QR_Scanner,
  PaymentInfo,
  ChargeInstructions,
} from '../screens';
import { ChargeStackParamList } from '../../types/types';

const ChargeStack = createStackNavigator<ChargeStackParamList>();

const ChargeNavigator = () => {
  return (
    <ChargeStack.Navigator screenOptions={{ headerShown: false }}>
      <ChargeStack.Screen name='QR_Scan' component={QR_Scanner} />
      <ChargeStack.Screen
        name='ChargeInstructions'
        component={ChargeInstructions}
      />
      <ChargeStack.Screen name='Payment' component={PaymentInfo} />
      <ChargeStack.Screen
        name='ChargeInProgress'
        component={ChargeInProgress}
      />
    </ChargeStack.Navigator>
  );
};

export default ChargeNavigator;
