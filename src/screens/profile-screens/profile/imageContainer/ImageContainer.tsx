import { View, Text, Image } from 'react-native';
import React from 'react';
import { profileStyles } from '../Profile.style';
import UserIcon from '../../../../../assets/images/user.png';

const ImageContainer = ({ userPhoto, userName }: ImageContainerProps) => {
  return (
    <View style={profileStyles.imageContainer}>
      <Image
        source={userPhoto ? userPhoto : UserIcon}
        style={profileStyles.userIcon}
      />
      <Text style={{ fontSize: 28, color: 'grey' }}>{userName}</Text>
    </View>
  );
};

export default ImageContainer;

type ImageContainerProps = {
  userPhoto: string | null;
  userName: string;
};
