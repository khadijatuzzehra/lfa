import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';
//Import SVGS
import Google from '../assets/svgs/Google';
import Facebook from '../assets/svgs/Facebook';

const SocialLoginButton = ({onGoogleButtonPress, buttonName}) => {
  let svgName = '';
  if (buttonName === 'Google') {
    SvgComponent = <Google style={styles.icon} />;
  }
  if (buttonName === 'Facebook') {
    SvgComponent = <Facebook style={styles.icon} />;
  }
  const handlePress = () => {
    onGoogleButtonPress();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      {SvgComponent}
      <Text style={styles.textButton}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.Height / 16,
    width: dimensions.Width / 2.5,
    borderColor: colors.borderSocial,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: dimensions.Width / 30,
    marginVertical: dimensions.Width / 30,
  },
  icon: {
    height: dimensions.Width / 20,
    width: dimensions.Width / 20,
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
