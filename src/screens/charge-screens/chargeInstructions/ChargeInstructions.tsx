import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { DropDown, PrimaryButton } from '../../../components';
import { ChargeStackScreenProps } from '../../../../types/types';
import theme from '../../../styles/theme.style';

const ChargeInstructions = React.memo(
  ({ navigation }: ChargeStackScreenProps<'ChargeInstructions'>) => {
    const instructions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    const data = [
      { label: 'DC connector', value: 'DC' },
      { label: 'AC connector', value: 'AC' },
    ];
    const [selected, setSelected] = useState<{
      label: string;
      value: string;
    }>();
    // on selected type connector send to server
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Instructions</Text>
        <DropDown
          data={data}
          label='Select type of connector'
          onSelect={setSelected}
        />
        <Text style={styles.description}>{instructions}</Text>
        <PrimaryButton
          text='continue'
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    );
  }
);

export default ChargeInstructions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: theme.PRIMARY_BG,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    textAlign: 'justify',
    marginVertical: 25,
  },
});
