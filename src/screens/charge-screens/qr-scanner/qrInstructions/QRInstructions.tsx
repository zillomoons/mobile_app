import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { qrStyles } from '../QR_Scanner.style';
import theme from '../../../../styles/theme.style';
import { PrimaryButton, SecondaryButton } from '../../../../components';

const QRInstructions = ({ turnOnCamera, enterId }: QRInstructionsPropsType) => {
  return (
    <>
      <Ionicons name='qr-code-outline' size={58} color={theme.PRIMARY_COLOR} />
      <Text style={qrStyles.instructions}>
        Scan QR code on charging device or enter id manually.
      </Text>
      <PrimaryButton text='scan qr code' onPress={turnOnCamera} />
      <SecondaryButton text='enter station id' onPress={enterId} />
    </>
  );
};

export default QRInstructions;

type QRInstructionsPropsType = {
  turnOnCamera: () => void;
  enterId: () => void;
};
