import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Upload from '../assets/svgs/Upload';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';
const UploadPicture = ({uploadPicture}) => {
  const [image, setImage] = useState(null);
  const handlePress = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});
      if (!response.didCancel) {
        setImage(response);
        uploadPicture(image);
      } else {
        console.log('Image selection cancelled.');
        uploadPicture();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <View style={styles.imageContainer}>
      {image && image.assets ? (
        <Image source={{uri: image.assets[0].uri}} style={styles.image} />
      ) : (
        <Image
          source={require('../assets/Images/Profile.png')}
          resizeMode="cover"
          style={styles.image}
        />
      )}
      <TouchableOpacity
        style={styles.buttonUpload}
        onPress={() => handlePress()}>
        <Upload style={styles.icon} />
        <Text style={styles.btnText}> Upload Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: dimensions.Width / 8,
    marginTop: dimensions.Width / 7,
    height: dimensions.Height / 30,
  },
  buttonUpload: {
    flexDirection: 'row',
    paddingTop: dimensions.Width / 100,
  },
  icon: {
    height: dimensions.Width / 25,
    width: dimensions.Width / 25,
    color: colors.Secondary,
  },
  image: {
    height: dimensions.Width / 4,
    width: dimensions.Width / 4,
  },
  btnText: {
    color: colors.Secondary,
    fontFamily: fonts.family.bold,
    paddingHorizontal: dimensions.Width / 100,
  },
});

export default UploadPicture;