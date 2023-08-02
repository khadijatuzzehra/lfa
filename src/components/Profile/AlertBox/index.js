import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Images from '../../../utils/Images';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
import TextCustom from '../../../components/Auth/TextCustom';
import CustomButton from '../../../components/Auth/CustomButton';

const AlertBox = ({text, textDescription, isVisible, onCancel, onConfirm}) => {
  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onCancel}
      unmountOnHide={true}
      backdropColor={colors.WhiteDull}
      backDropOpacity={10}
      hasBackdrop={true}>
      <View style={styles.modalContainer}>
        <TextCustom text={text} textType="Headings" />
        <Image style={styles.line} source={Images.AlertLine} />
        <View style={styles.modalContent}>
          <TextCustom text={textDescription} textType="Labels" />
          <View style={styles.modalButtonsContainer}>
            <CustomButton
              text="Delete"
              height={dimensions.Height / 20}
              width={dimensions.Width / 5}
              backgroundColor={colors.red}
              color={colors.White}
              onClick={onConfirm}
            />
            <CustomButton
              text="Cancel"
              height={dimensions.Height / 20}
              width={dimensions.Width / 5}
              backgroundColor={colors.cancelButton}
              color={colors.White}
              onClick={onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertBox;

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: dimensions.Height / 4,
    width: dimensions.Width / 1.1,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    borderRadius: 20,
  },
  modalContent: {
    backgroundColor: colors.white,
    marginTop: dimensions.Height / 100,
    alignItems: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
  },
  line: {
    width: dimensions.Width / 1.1,
    marginVertical: dimensions.Height / 100,
  },
});
