import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// import theme
import fonts from '../theme/Fonts';

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
  return (
    <View>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={[{height, width, backgroundColor}, styles.btn]}>
        <Text style={[{color}, styles.btnText]}>{text}</Text>
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
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btnText: {
    fontFamily: fonts.family.semiBold,
  },
});

export default CustomButton;
