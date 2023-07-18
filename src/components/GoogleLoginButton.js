import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';
//Import SVGS
import Google from '../assets/svgs/Google';
import Facebook from '../assets/svgs/Facebook';

const SocialLoginButton = ({onGoogleButtonPress}) => {
  const handlePress = () => {
    onGoogleButtonPress();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Google style={styles.icon} />
      <Text style={styles.textButton}>Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: dimensions.Height / 14,
    width: dimensions.Width / 2.5,
    borderColor: colors.LightestGray,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: dimensions.Width / 20,
    marginVertical: 10,
    padding: 10,
  },
  icon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.Gray,
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.medium,
  },
});

export default SocialLoginButton;
