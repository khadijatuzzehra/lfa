import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';
//Import SVGS
import Google from '../assets/svgs/Google';
import Facebook from '../assets/svgs/Facebook';

const SocialLoginButton = ({onClick}) => {
  const handlePress = () => {
    onClick('Hello World');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Facebook style={styles.icon} />
      <Text style={styles.textButton}>Facebook</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: dimensions.Height / 16,
    width: dimensions.Width / 2.5,
    borderColor: colors.LightestGray,
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
