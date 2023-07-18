import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
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
    if (text === 'Register') {
      onClick('Register');
    } else {
      onClick('Login');
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
    color: colors.Secondary,
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
