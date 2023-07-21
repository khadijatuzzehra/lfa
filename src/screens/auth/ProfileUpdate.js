import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Headings from '../../components/Headings';
import InfoText from '../../components/InfoText';
import Labels from '../../components/Labels';
import CustomTextInput from '../../components/CustomTextInput';
import ActionButton from '../../components/ActionButton';
import CustomButton from '../../components/CustomButton';
import ProfilePic from '../../assets/svgs/pfp';

import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
const ProfileUpdate = () => {
  const handlePress = () => {
    console.log('Press');
  };

  return (
    <View style={styles.container}>
      <Headings text="Set up your Profile" />
      <InfoText text="Upload a profile picture " />
      <TouchableOpacity style={styles.imageContainer}>
        <ProfilePic />
      </TouchableOpacity>
      <CustomButton
        text="Next"
        height={dimensions.Height / 14}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Secondary}
        color={colors.White}
        onClick={handlePress}
      />
      <ActionButton
        text=""
        buttonText="Skip for Now"
        handlePress={handlePress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dimensions.Height / 5,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    margin: dimensions.Width / 20,
  },
});

export default ProfileUpdate;
