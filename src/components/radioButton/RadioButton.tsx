import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const RadioButton = ({ data, onSelect }: RadioButtonProps) => {
  const [userOption, setUserOption] = useState('');
  const selectHandler = (value: string) => {
    setUserOption(value);
    onSelect(value);
  };
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable
            key={item.value}
            style={
              userOption === item.value
                ? [styles.item, styles.selected]
                : styles.item
            }
            onPress={() => selectHandler(item.value)}
          >
            <View style={styles.circle}>
              <View
                style={userOption === item.value ? styles.selectedCircle : null}
              ></View>
            </View>
            <Text>{item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF5F5',
    marginBottom: 8,
    padding: 10,
  },
  selected: {
    backgroundColor: '#DEF5E5',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#404258',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: '#59CE8F',
    borderRadius: 50,
    width: 8,
    height: 8,
  },
});

type RadioButtonProps = {
  data: Array<{ value: string }>;
  onSelect: (value: string) => void;
};
