import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileStackParamList } from '../../types/types';
import { Profile, EditProfile, EditCard, PushNotifications } from '../screens';

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name='EditProfile'
        component={EditProfile}
        options={{
          headerTitle: 'Edit Profile',
        }}
      />
      <ProfileStack.Screen
        name='EditCard'
        component={EditCard}
        options={{
          headerTitle: 'Edit Card',
        }}
      />
      <ProfileStack.Screen
        name='PushNotif'
        component={PushNotifications}
        options={{
          headerTitle: 'Push Notifications',
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
