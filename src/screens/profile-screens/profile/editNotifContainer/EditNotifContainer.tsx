import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { profileStyles } from '../Profile.style';

const EditNotifContainer = ({
  notificationNum,
  navigateToEditProfile,
  navigateToPushNotif,
}: EditNotifContainerProps) => {
  return (
    <View style={profileStyles.editNotifIconContainer}>
      <TouchableOpacity onPress={navigateToEditProfile}>
        <MaterialIcons name='edit' style={profileStyles.notifIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigateToPushNotif}
        style={{ flexDirection: 'row' }}
      >
        <Ionicons name='notifications' style={profileStyles.notifIcon} />
        <View
          style={
            notificationNum ? profileStyles.notifNumContainer : { opacity: 0 }
          }
        >
          <Text style={profileStyles.notifNum}>{notificationNum}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EditNotifContainer;

type EditNotifContainerProps = {
  notificationNum: number;
  navigateToEditProfile: () => void;
  navigateToPushNotif: () => void;
};
