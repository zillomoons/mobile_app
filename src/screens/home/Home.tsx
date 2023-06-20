import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { PrimaryButton, SecondaryButton } from '../../components';
import { HomeTabScreenProps } from '../../../types/types';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store';

import forest from '../../../assets/images/Forest.png';
import theme from '../../styles/theme.style';

const Home = React.memo(({ navigation }: HomeTabScreenProps<'Home'>) => {
  const user = useSelector(selectUser);
  const carModel = user.car ? `${user.car.brand} ${user.car.model}` : null;
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Hey, {user.username}!</Text>
      <Text>Let's charge your car</Text>
      <Text>{carModel}</Text>
      {/* <Image style={styles.image} source={forest} /> */}
      <PrimaryButton
        text='charge'
        onPress={() =>
          navigation.navigate('ChargeStack', { screen: 'QR_Scan' })
        }
      />
      <SecondaryButton
        text='find stations'
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BG,
  },
  greetings: {
    fontSize: 32,
    fontWeight: 'bold',
    padding: 25,
    color: theme.PRIMARY_COLOR,
  },
  image: {
    width: '100%',
    height: '50%',
  },
});
