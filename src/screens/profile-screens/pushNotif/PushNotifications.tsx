import { StyleSheet, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import theme from '../../../styles/theme.style';
import { ListItem } from './listItem';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    title: 'November Cashback',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 'someId1',
  },
  {
    title: 'MNT10000 for recommendation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 'someId2',
  },
  {
    title: 'October Cashback',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 'someId15',
  },
];
export type ItemType = {
  title: string;
  description: string;
  id: string;
};

const PushNotifications = React.memo(() => {
  const [notifications, setNotifications] = useState(data);
  const onDismiss = useCallback((item: ItemType) => {
    setNotifications((notifications) =>
      notifications.filter((el) => el.id !== item.id)
    );
  }, []);
  const scrollRef = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef}>
        {notifications.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onDismiss={onDismiss}
            simultaneousHandlers={scrollRef}
          />
        ))}
      </ScrollView>
    </View>
  );
});

export default PushNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.PRIMARY_BG,
  },
});
