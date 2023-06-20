import { View, Text } from 'react-native';
import React from 'react';
import chargeStyles from '../ChargeInProgress.style';
import { ChargeInfo } from './chargeInfo';

const ChargeDetails = React.memo(
  ({ carModel, chargeCost, chargeSpeed, timeLeft }: ChargeDetailsProps) => {
    return (
      <View style={chargeStyles.detailsContainer}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 24 }}>{carModel}</Text>
        </View>
        <ChargeInfo
          title='Estimated Cost'
          info={`MNT ${chargeCost}`}
          iconName='cash-multiple'
          styleObj={{ width: '90%', marginBottom: 15 }}
        />
        <View style={{ flexDirection: 'row', width: '90%' }}>
          <ChargeInfo
            title='kW'
            info={chargeSpeed.toString()}
            iconName='speedometer'
            styleObj={{ width: '45%', marginRight: 15 }}
          />
          <ChargeInfo
            title='Time'
            info={`${timeLeft} mins`}
            iconName='timer-outline'
            styleObj={null}
          />
        </View>
      </View>
    );
  }
);

export default ChargeDetails;

type ChargeDetailsProps = {
  carModel: string | null;
  chargeCost: number;
  chargeSpeed: number;
  timeLeft: number;
};
