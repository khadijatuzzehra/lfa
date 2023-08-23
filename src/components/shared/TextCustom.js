import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const TextCustom = ({text, textType, color}) => {
  const styleUse = [textTypeStyles[textType], {color}];

  return (
    <View>
      <Text style={styleUse}>{text}</Text>
    </View>
  );
};

const textTypeStyles = StyleSheet.create({
  Headings: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font18,
    marginLeft: dimensions.Width / 30,
  },
  HomeScreenHeadings: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font18,
    marginBottom: -dimensions.Width / 50,
  },

  InfoText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font13,
    marginLeft: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
  },
  OnBoardingText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font13,
    marginLeft: dimensions.Width / 30,
    marginTop: dimensions.Width / 40,
    textAlign: 'center',
  },
  Button: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font13,
    marginRight: dimensions.Width / 30,
    marginTop: dimensions.Width / 40,
  },
  Role: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    marginLeft: dimensions.Width / 30,
  },
  Labels: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    marginLeft: dimensions.Width / 30,
    marginBottom: dimensions.Width / 100,
    textAlign: 'left',
  },
  Description: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font10,
    marginLeft: dimensions.Width / 30,
    width: dimensions.Width / 1.2,
  },
  CompTitles: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
    marginLeft: dimensions.Width / 30,
  },
  Date: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font10,
    marginLeft: dimensions.Width / 30,
    width: dimensions.Width / 1.1,
  },
  Navigation: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font14,
    marginVertical: dimensions.Width / 30,
  },
  Name: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
    textAlign: 'center',
  },
  Designation: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font10,
    textAlign: 'center',
  },
});

export default TextCustom;
