import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Images from '../../utils/Images';
import TextCustom from './TextCustom';

const PictureOptions = ({onCancel, onSelect}) => {
  const backDropPress = () => {
    onCancel('');
  };

  const handleOptionSelect = selectedOption => {
    onSelect(selectedOption);
  };

  return (
    <Modal
      isVisible={true}
      onBackdropPress={backDropPress}
      onSwipeComplete={backDropPress}
      swipeDirection="down"
      animationIn="slideInUp"
      animationOut="zoomOutUp"
      transparent={true}
      style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Image source={Images.BottomModalButton} style={styles.icon2} />
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('Camera')}>
            <Image source={Images.Camera} style={styles.icon} />
            <TextCustom
              text="Camera"
              textType="Navigation"
              color={colors.Black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('Gallery')}>
            <Image source={Images.Gallery} style={styles.icon} />
            <TextCustom
              text="Gallery"
              textType="Navigation"
              color={colors.Black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.White,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: dimensions.Width / 2,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: dimensions.Width / 4,
    marginRight: dimensions.Width / 4,
    marginTop: dimensions.Width / 20,
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimensions.Width / 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  icon2: {
    width: dimensions.Width / 7,
    height: 12,
    resizeMode: 'contain',
  },
  header: {
    marginVertical: dimensions.Width / 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PictureOptions;
