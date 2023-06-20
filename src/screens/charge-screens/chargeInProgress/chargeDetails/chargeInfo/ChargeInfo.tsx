import { View, Text } from 'react-native';
import React from 'react';
import chargeStyles from '../../ChargeInProgress.style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ChargeInfo = ({ title, info, iconName, styleObj }: ChargeInfoProps) => {
  return (
    <View style={[chargeStyles.infoBox, styleObj]}>
      <Text style={chargeStyles.infoHeading}>{title}</Text>
      <View style={chargeStyles.infoTextContainer}>
        <Text style={chargeStyles.infoText}>{info}</Text>
        <MaterialCommunityIcons name={iconName} style={chargeStyles.infoIcon} />
      </View>
    </View>
  );
};

export default ChargeInfo;

type ChargeInfoProps = {
  title: string;
  info: string;
  iconName: 'cash-multiple' | 'speedometer' | 'timer-outline';
  styleObj: any;
};
