import React, {SetStateAction, useState} from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../utils/color';
import {AddIcon, ModalCloseIcon, ModalMailIcon} from './Svgs';
import CommentInput from './CommentInput';

interface CustomModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<SetStateAction<boolean>>;
}
const CustomModal = ({
  modalVisible,
  setModalVisible,
}: CustomModalProps): JSX.Element => {
  const [keyboard, setKeyboard] = useState<boolean>(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {keyboard ? <CommentInput /> : ''}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setKeyboard(true)}
                style={styles.mailContainer}>
                <ModalMailIcon />
              </TouchableOpacity>

              <TouchableOpacity style={styles.mailContainer}>
                <AddIcon />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.closeContainer}>
                <ModalCloseIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.modalBackground,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  mailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: COLORS.mainBlue,
    borderRadius: 50,
    marginTop: 18,
  },
  closeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    backgroundColor: COLORS.mainBlue,
    borderRadius: 50,
    marginTop: 26,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '12%',
    right: '5%',
    flex: 1,
    alignItems: 'center',
  },
});

export default CustomModal;
