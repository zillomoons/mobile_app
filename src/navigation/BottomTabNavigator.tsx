import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../../types/types';
import { Home, Settings, Map } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme.style';
import ChargeNavigator from './ChargeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={24} color={theme.PRIMARY_COLOR} />
          ),
        }}
      />
      <Tab.Screen
        name='Map'
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='map-outline'
              size={24}
              color={theme.PRIMARY_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ChargeStack'
        component={ChargeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='ios-flash-sharp'
              size={24}
              color={theme.PRIMARY_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' size={24} color={theme.PRIMARY_COLOR} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='md-settings-sharp'
              size={24}
              color={theme.PRIMARY_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
