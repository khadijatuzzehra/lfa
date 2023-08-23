import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import fonts from '../../theme/Fonts';
import dimensions from '../../theme/Dimensions';
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
  if (text === 'Follow' || text === 'Following') {
    styleUse = styles.button;
    buttonStyle = styles.btnText2;
  }
  if (text === 'Delete' || text === 'Cancel') {
    styleUse = styles.alertButton;
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
    marginHorizontal: dimensions.Width / 30,
    marginTop: dimensions.Width / 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  btnText: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font16,
  },
  btnText2: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font11,
  },
  alertButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: dimensions.Width / 50,
  },
});

export default CustomButton;
