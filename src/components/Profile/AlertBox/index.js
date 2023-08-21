import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Images from '../../../utils/Images';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
import TextCustom from '../../../components/Auth/TextCustom';
import CustomButton from '../../../components/Auth/CustomButton';

const AlertBox = ({
  text,
  textDescription,
  icon,
  isVisible,
  onCancel,
  onConfirm,
}) => {
  const SVGComponent = Images[icon];

  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onCancel}
      unmountOnHide={true}
      backdropColor={colors.WhiteDull}
      backDropOpacity={10}
      hasBackdrop={true}>
      <View style={styles.modalContainer}>
        <View style={styles.icons}>
          <SVGComponent />
        </View>
        <View style={styles.modalContent}>
          <TextCustom
            text={text}
            textType="HomeScreenHeadings"
            color={colors.Black}
          />
          <TextCustom
            text={textDescription}
            textType="Labels"
            color={colors.Black}
          />
          <View style={styles.modalButtonsContainer}>
            <CustomButton
              text="Delete"
              height={dimensions.Height / 30}
              width={dimensions.Width / 6}
              backgroundColor={colors.Red}
              color={colors.White}
              onClick={onConfirm}
            />
            <CustomButton
              text="Cancel"
              height={dimensions.Height / 30}
              width={dimensions.Width / 6}
              backgroundColor={colors.LightGray}
              color={colors.Black}
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
    height: dimensions.Height / 5,
    width: dimensions.Width / 1.1,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: colors.Black,
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  modalContent: {
    backgroundColor: colors.white,
    marginTop: dimensions.Height / 50,
    alignItems: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    marginLeft: dimensions.Width / 4,
    marginTop: dimensions.Height / 50,
  },
  line: {
    width: dimensions.Width / 1.1,
    marginVertical: dimensions.Height / 100,
  },
  icons: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.borderSocialButton,
    top: -dimensions.Width / 10,
    height: dimensions.Height / 15,
    width: dimensions.Height / 15,
    borderRadius: 100,
    shadowColor: colors.Black,
    elevation: 10,
    shadowRadius: 0.18,
  },
});
