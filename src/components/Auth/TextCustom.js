import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import theme
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const TextCustom = ({text, textType, color}) => {
  let styleUse = '';
  if (textType === 'OnBoardingText') {
    styleUse = styles.onBoardingText;
    if (text === 'Next') {
      styleUse = styles.onBoardingText2;
    }
  }
  if (textType === 'Labels') {
    styleUse = styles.labels;
  }
  if (textType === 'InfoText') {
    styleUse = styles.infoText;
  }
  if (textType === 'Headings') {
    styleUse = styles.headings;
  }
  if (textType === 'HomeScreenHeadings') {
    styleUse = styles.homeScreenHeadings;
  }
  if (textType === 'Navigation') {
    styleUse = styles.navigation;
  }
  if (textType === 'Date') {
    styleUse = styles.date;
  }
  if (textType === 'CompTitles') {
    styleUse = styles.compTitles;
  }
  if (textType === 'Description') {
    styleUse = styles.description;
  }
  if (textType === 'Role') {
    styleUse = styles.role;
  }
  if (textType === 'Button') {
    styleUse = styles.buttonText;
  }
  if (textType === 'Name') {
    styleUse = styles.name;
  }
  if (textType === 'Designation') {
    styleUse = styles.designation;
  }
  return (
    <View>
      <Text style={[{color}, styleUse]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headings: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font20,
  },
  homeScreenHeadings: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.font20,
  },

  buttonText: {
    marginLeft: dimensions.Width / 30,
    marginTop: dimensions.Width / 50,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
  },
  infoText: {
    marginLeft: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
  },
  onBoardingText: {
    marginLeft: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font13,
    textAlign: 'center',
  },
  onBoardingText2: {
    marginRight: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font13,
    textAlign: 'center',
  },
  role: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
  },
  labels: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
  },
  description: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font10,
  },
  compTitles: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.font15,
  },
  date: {
    marginLeft: dimensions.Width / 30,
    width: dimensions.Width / 1.5,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font10,
  },
  navigation: {
    marginLeft: dimensions.Width / 30,
    marginVertical: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font16,
  },
  name: {
    textAlign: 'center',
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font14,
  },
  designation: {
    textAlign: 'center',
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font10,
  },
});

export default TextCustom;