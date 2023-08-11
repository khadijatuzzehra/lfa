import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Images from '../../utils/Images';
import TextCustom from '../../components/Auth/TextCustom';

const PictureOptions = ({onCancel, onSelect}) => {
  const [isModalVisible, setModalVisible] = useState(true);

  const backDropPress = () => {
    onCancel('');
  };

  const handleOptionSelect = selectedOption => {
    onSelect(selectedOption);
  };

  return (
    <Modal
      isVisible={isModalVisible}
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
              color={colors.Headings}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('Gallery')}>
            <Image source={Images.Gallery} style={styles.icon} />
            <TextCustom
              text="Gallery"
              textType="Navigation"
              color={colors.Headings}
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: dimensions.Width / 2,
    shadowColor: colors.Black,
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: dimensions.Width / 6,
    marginRight: dimensions.Width / 6,
    marginTop: dimensions.Width / 10,
  },
  option: {
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimensions.Width / 30,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  icon2: {
    width: dimensions.Width / 5,
    height: 10,
    resizeMode: 'contain',
  },
  header: {
    marginVertical: dimensions.Width / 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PictureOptions;
