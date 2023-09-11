import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';
import Google from '../../assets/svgs/Google';
import Facebook from '../../assets/svgs/Facebook';

const SocialLoginButton = ({onGoogleButtonPress, buttonName}) => {
  let SvgComponent = '';
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
    borderColor: colors.borderSocialButton,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: dimensions.Width / 20,
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
