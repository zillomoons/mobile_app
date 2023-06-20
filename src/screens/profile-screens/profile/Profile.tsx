import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  HomeTabScreenProps,
  ProfileStackScreenProps,
} from '../../../../types/types';
import { profileStyles } from './Profile.style';
import ProfileInfo from './profileInfo/ProfileInfo';
import AccountInfo from './accountInfo/AccountInfo';
import { selectUser } from '../../../store';
import { HelpButton, LogoutButton } from '../../../components';
import { EditNotifContainer } from './editNotifContainer';
import { ImageContainer } from './imageContainer';

const Profile = React.memo(
  ({ navigation }: ProfileStackScreenProps<'Profile'>) => {
    const user = useSelector(selectUser);
    const notificationNum = 3;
    const navigateToEditProfile = useCallback(() => {
      navigation.navigate('EditProfile');
    }, []);
    const navigateToPushNotif = useCallback(() => {
      navigation.navigate('PushNotif');
    }, []);
    return (
      <SafeAreaView style={profileStyles.container}>
        <EditNotifContainer
          notificationNum={notificationNum}
          navigateToPushNotif={navigateToPushNotif}
          navigateToEditProfile={navigateToEditProfile}
        />
        <ImageContainer userName={user.username} userPhoto={user.photo} />
        <AccountInfo accountSum={user.accountSum} />
        <ProfileInfo
          email={user.email}
          phoneNumber={user.phoneNum}
          carModel={`${user.car?.brand} ${user.car?.model}`}
        />
        <HelpButton />
        <LogoutButton />
      </SafeAreaView>
    );
  }
);

export default Profile;
