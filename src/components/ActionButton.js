import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const ActionButton = ({text, buttonText, handlePress}) => {
  const handleClick = () => {
    handlePress('Hello World');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => handleClick()}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 80,
  },
  text: {
    fontFamily: fonts.family.regular,
    color: colors.LightGray,
    fontSize: fonts.size.font12,
  },
  btnText: {
    fontFamily: fonts.family.semiBold,
    color: colors.DarkGray,
    fontSize: fonts.size.font12,
  },
});
export default ActionButton;
