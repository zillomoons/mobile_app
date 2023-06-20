import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { CustomInput, CustomModal } from '../../../components';
import { qrStyles } from './QR_Scanner.style';
import { QRInstructions } from './qrInstructions';
import CameraMode from './cameraMode/CameraMode';
import { ChargeStackScreenProps } from '../../../../types/types';
import { validateStationId } from '../../../utils';

const QR_Scanner = React.memo(
  ({ navigation }: ChargeStackScreenProps<'QR_Scan'>) => {
    const [hasPermission, setHasPermission] = useState<null | boolean>(null);
    const [scanned, setScanned] = useState(false);
    const [qrCode, setQRCode] = useState<null | QRCodeType>(null);

    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const __startCamera = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === 'granted') {
        setHasPermission(true);
      } else {
        Alert.alert(
          'Access denied. To change a permission setting go to Settings >> Apps >> Permissions. '
        );
      }
    };

    //Use something else to forward to other screen after qr code scanned
    useEffect(() => {
      qrCode && navigation.navigate('ChargeInstructions');
    }, [qrCode]);

    const handleBarCodeScanned = ({ type, data }: QRCodeType) => {
      setScanned(true);
      Alert.alert(
        `Bar code with type ${type} and data ${data} has been scanned!`
      );
      setQRCode({ type, data });
      setHasPermission(null);
      // send station QR code to server
    };
    const onEnterStationId = () => {
      //send inputValue (station Id) to server
      if (validateStationId(inputValue)) {
        setModalVisible(!modalVisible);
        inputValue && navigation.navigate('ChargeInstructions');
        setInputValue('');
      } else {
        Alert.alert('Enter valid station id');
      }
    };

    return (
      <View style={qrStyles.container}>
        {hasPermission ? (
          <CameraMode
            scanned={scanned}
            handleBarCodeScanned={handleBarCodeScanned}
            setScanned={setScanned}
          />
        ) : (
          <QRInstructions
            turnOnCamera={__startCamera}
            enterId={() => setModalVisible(true)}
          />
        )}
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          buttonTitle='OK'
          callback={onEnterStationId}
        >
          <CustomInput
            label='Enter ID'
            pass={false}
            value={inputValue}
            onChange={setInputValue}
          />
        </CustomModal>
      </View>
    );
  }
);

export default QR_Scanner;

export type QRCodeType = {
  type: string;
  data: string;
};
