/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {handlePress, handleCameraPress} from '../../utils/GlobalFunctions';
import TextCustom from '../../components/Shared/TextCustom';
import PictureOptions from '../../components/Shared/PictureOptions';
import Images from '../../utils/Images';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const UploadPicture = ({uploadPicture}) => {
  const [optionModal, optionModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const handleClick = async () => {
    optionModalVisible(true);
  };
  const onSelect = async item => {
    optionModalVisible(false);
    console.log(item);
    if (item === 'Camera') {
      const imageRes = await handleCameraPress();
      console.log(imageRes, 'Image');
      if (imageRes) {
        setImage(imageRes);
      }
    }
    if (item === 'Gallery') {
      const imageRes = await handlePress();
      console.log('Image', imageRes);

      if (imageRes) {
        console.log(imageRes, 'Image');
        setImage(imageRes);
      }
    }
  };
  return (
    <View style={styles.imageContainer}>
      {image && image.assets ? (
        <Image source={{uri: image.assets[0].uri}} style={styles.image} />
      ) : (
        <Image source={Images.ProfilePicture} style={styles.image} />
      )}
      {image && image.assets ? (
        <Text></Text>
      ) : (
        <TouchableOpacity style={styles.badgeContainer} onPress={handleClick}>
          <Image source={Images.AddButton} style={styles.badge} />
        </TouchableOpacity>
      )}
      <View style={styles.text}>
        <TextCustom
          text="Upload Picture"
          textType="Labels"
          color={colors.Black}
        />
      </View>
      {optionModal && (
        <PictureOptions onCancel={onSelect} onSelect={onSelect} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: dimensions.Width / 5,
    marginTop: dimensions.Width / 10,
    height: dimensions.Height / 30,
  },
  buttonUpload: {
    flexDirection: 'row',
    paddingTop: dimensions.Width / 100,
  },
  icon: {
    height: dimensions.Width / 25,
    width: dimensions.Width / 25,
    color: colors.Primary,
  },
  image: {
    height: dimensions.Width / 4,
    width: dimensions.Width / 4,
    borderRadius: 100,
  },
  btnText: {
    color: colors.Primary,
    fontFamily: fonts.family.bold,
    paddingHorizontal: dimensions.Width / 100,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -10,
    left: dimensions.Width / 1.8,
    zIndex: 1,
  },
  badge: {
    backgroundColor: colors.Primary,
    height: dimensions.Height / 40,
    borderRadius: 100,
    width: dimensions.Width / 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: dimensions.Width / 100,
  },
});

export default UploadPicture;
