import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import themeStyle from '../../../styles/theme.style';
import { CustomInput, PrimaryButton } from '../../../components';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store';
import UserIcon from '../../../../assets/images/user.png';
import theme from '../../../styles/theme.style';
import { MaterialIcons } from '@expo/vector-icons';

const EditProfile = React.memo(() => {
  const user = useSelector(selectUser);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phoneNum);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={user.photo ? user.photo : UserIcon}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.photoIconContainer}
          onPress={() => console.log('Upload')}
        >
          <MaterialIcons name='photo-camera' style={styles.photoIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <CustomInput
          label='Username'
          pass={false}
          value={username}
          onChange={setUsername}
        />
        <CustomInput
          label='Email'
          pass={false}
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          label='Phone'
          pass={false}
          value={phone}
          onChange={setPhone}
        />
      </View>
      <PrimaryButton text='save' onPress={() => console.log('save')} />
    </View>
  );
});

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeStyle.PRIMARY_BG,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 25,
    borderWidth: 2,
    borderColor: theme.PRIMARY_BG,
    borderRadius: 100,
    marginVertical: 25,
  },
  photoIconContainer: {
    position: 'absolute',
    top: '70%',
    left: '30%',
    backgroundColor: 'white',
    borderRadius: 60,
  },
  photoIcon: {
    fontSize: 24,
    color: theme.PRIMARY_COLOR,
  },
  formContainer: {
    width: '80%',
    marginBottom: 15,
  },
});
