import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import fonts from '../../theme/Fonts';
import colors from '../../theme/Colors';
const CustomButton = ({
  text,
  backgroundColor,
  color,
  height,
  width,
  onClick,
}) => {
  const handlePress = () => {
    if (text === 'Login') {
      onClick('Login');
    } else {
      onClick('Register');
    }
  };
  let styleUse = styles.btn;
  let buttonStyle = styles.btnText;
  if (
    text === 'Follow' ||
    text === 'Following' ||
    text === 'Delete' ||
    text === 'Cancel'
  ) {
    styleUse = styles.button;
    buttonStyle = styles.btnText2;
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={[{height, width, backgroundColor}, styleUse]}>
        <Text style={[{color}, buttonStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    // marginVertical: 10,
    shadowColor: colors.Black,
    shadowOpacity: 0.8,
    shadowRadius: 16.0,
    elevation: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  btnText: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
  },
  btnText2: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
  },
});

export default CustomButton;
