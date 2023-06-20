import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import theme from '../../../styles/theme.style';
import { InfoBox, PrimaryButton, RadioButton } from '../../../components';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store';
import { ChargeStackScreenProps } from '../../../../types/types';

const PaymentInfo = ({ navigation }: ChargeStackScreenProps<'Payment'>) => {
  // receive price per kWh from server
  // and ev battery size depending on car model
  const user = useSelector(selectUser);
  const price = 850;
  const chargingTime = 45;
  // or receive info on batterySize from server
  const batterySize = user.car ? user.car.batterySize : 40;
  const infoText = ` Price ${price} MNT per kWh. The full recharge will approximately cost you ${
    price * batterySize
  } MNT. Approximate time for full recharge ${chargingTime} minutes.`;

  const data = [
    { value: 'E-Pass Card' },
    { value: 'Bank Card' },
    { value: 'Google Pay' },
  ];
  const [option, setOption] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 200 }}>
        <InfoBox title='Energy Information' infoText={infoText} />
      </View>
      <Text style={{ marginVertical: 15, fontSize: 24 }}>
        Choose payment method:
      </Text>
      <RadioButton data={data} onSelect={(value: string) => setOption(value)} />
      <Text>Your choice: {option}</Text>
      {/* Add navigation to payment instructions */}
      <PrimaryButton
        text='continue'
        onPress={() => navigation.navigate('ChargeInProgress')}
      />
    </View>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BG,
  },
});
