import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, Button } from 'react-native';
import { QRCodeType } from '../QR-Scanner';

const CameraMode = ({
  scanned,
  handleBarCodeScanned,
  setScanned,
}: CameraModePropsType) => {
  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </>
  );
};

export default CameraMode;

type CameraModePropsType = {
  scanned: boolean;
  handleBarCodeScanned: (object: QRCodeType) => void;
  setScanned: (value: boolean) => void;
};
