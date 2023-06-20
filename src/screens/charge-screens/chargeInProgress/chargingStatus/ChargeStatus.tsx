import React from 'react';
import { View, Text } from 'react-native';
import chargeStyles from '../ChargeInProgress.style';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../../styles/theme.style';

const ChargingStatus = React.memo(
  ({ isCharging, status }: ChargingStatusPropsType) => {
    return (
      <View style={chargeStyles.chargingStatus}>
        {isCharging ? (
          <Ionicons name='flash-sharp' size={24} color={theme.MEDIUM_GREEN} />
        ) : (
          <Ionicons name='flash-off-outline' size={24} color={theme.RED} />
        )}
        <Text style={{ color: theme.DARK_GREY, marginLeft: 10 }}>{status}</Text>
      </View>
    );
  }
);

type ChargingStatusPropsType = {
  isCharging: boolean;
  status: string;
};

export default ChargingStatus;
