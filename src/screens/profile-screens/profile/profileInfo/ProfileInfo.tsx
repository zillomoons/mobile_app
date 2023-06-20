import { View, Text } from 'react-native';
import React from 'react';
import { profileStyles } from '../Profile.style';

const ProfileInfo = ({ email, phoneNumber, carModel }: ProfileInfoType) => {
  return (
    <View style={profileStyles.profileInfo}>
      <Text style={profileStyles.label}>Email:</Text>
      <Text style={profileStyles.profileText}>{email}</Text>
      <Text style={profileStyles.label}>Phone number:</Text>
      <Text style={profileStyles.profileText}>{phoneNumber}</Text>
      <Text style={profileStyles.label}>Car model:</Text>
      <Text style={profileStyles.profileText}>{carModel}</Text>
    </View>
  );
};

export default ProfileInfo;

type ProfileInfoType = { email: string; phoneNumber: string; carModel: string };
