import React, { useEffect } from 'react';
import { View, Text, PixelRatio } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../store';
import chargeStyles from './ChargeInProgress.style';
import { ChargeBtnContainer } from './chargeBtnContainer';
import { ChargingStatus } from './chargingStatus';
import { CircularProgress } from '../../../components';
import theme from '../../../styles/theme.style';
import { ChargeDetails } from './chargeDetails';

const STROKE_WIDTH = 30;
const radius = PixelRatio.roundToNearestPixel(130);
const BG_STROKE_COLOR = '#DDF5E8';

const ChargeInProgress = React.memo(() => {
  const isCharging = false;
  const user = useSelector(selectUser);
  // request batteryLevel and chargeCost from server
  const batteryLevel = 45;
  const chargeCost = 34000;
  const chargeSpeed = 350;
  const timeLeft = 24;
  const carModel = user.car ? `${user.car.brand} ${user.car.model}` : null;
  return (
    <SafeAreaView style={chargeStyles.container}>
      <View style={{ marginBottom: 10, alignSelf: 'center' }}>
        {isCharging ? (
          <ChargingStatus status='Charging' isCharging={isCharging} />
        ) : (
          <ChargingStatus status='Not Charging' isCharging={isCharging} />
        )}
      </View>
      <CircularProgress
        strokeWidth={STROKE_WIDTH}
        radius={radius}
        bgColor={theme.MEDIUM_GREEN}
        percentageComplete={batteryLevel}
      />
      <ChargeDetails
        carModel={carModel}
        chargeCost={chargeCost}
        chargeSpeed={chargeSpeed}
        timeLeft={timeLeft}
      />
      <ChargeBtnContainer isCharging={isCharging} />
    </SafeAreaView>
  );
});

export default ChargeInProgress;
