import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import chargeStyles from '../ChargeInProgress.style';
import theme from '../../../../styles/theme.style';

const ChargeBtnContainer = React.memo(
  ({ isCharging }: ChargeBtnContainerPropsType) => {
    return (
      <TouchableOpacity
        style={
          isCharging
            ? chargeStyles.chargeBtn
            : [chargeStyles.chargeBtn, { backgroundColor: theme.MEDIUM_GREEN }]
        }
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>
          {isCharging ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
    );
  }
);

type ChargeBtnContainerPropsType = {
  isCharging: boolean;
};

export default ChargeBtnContainer;
