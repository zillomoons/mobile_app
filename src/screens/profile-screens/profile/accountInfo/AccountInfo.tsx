import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { profileStyles } from '../Profile.style';
import theme from '../../../../styles/theme.style';

const AccountInfo = ({ accountSum }: { accountSum: number }) => {
  return (
    <View style={profileStyles.accountInfo}>
      <Text style={profileStyles.sumInfoText}>MNT {accountSum}</Text>
      <TouchableOpacity
        style={{
          padding: 5,
          width: '30%',
          backgroundColor: theme.MEDIUM_GREEN,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => console.log('pay')}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountInfo;
