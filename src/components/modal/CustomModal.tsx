import { Text, View, Modal, Alert, Pressable } from 'react-native';
import React from 'react';
import modalStyles from './CustomModal.style';

type CustomModalType = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  buttonTitle: string;
  children?: React.ReactNode;
  callback: () => void;
};

const CustomModal = ({
  modalVisible,
  setModalVisible,
  children,
  buttonTitle,
  callback,
}: CustomModalType) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <View style={modalStyles.modalText}>{children}</View>
          <View style={modalStyles.buttonsContainer}>
            <Pressable
              style={[modalStyles.button, modalStyles.btnCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textCancel}>CANCEL</Text>
            </Pressable>
            <Pressable
              style={[modalStyles.button, modalStyles.btnSubmit]}
              onPress={callback}
            >
              <Text style={modalStyles.textSubmit}>{buttonTitle}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
