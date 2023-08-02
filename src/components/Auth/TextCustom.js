import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import theme
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const TextCustom = ({text, textType}) => {
  let styleUse = '';
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
  return (
    <View style={styles.container}>
      <Text style={styleUse}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headings: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font20,
    color: colors.Headings,
  },
  homeScreenHeadings: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.font20,
    color: colors.Primary,
    marginTop: dimensions.Height / 100,
  },
  infoText: {
    marginLeft: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    color: colors.InfoText,
  },
  role: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    color: colors.InfoText,
  },
  labels: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Black,
  },
  description: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font10,
    color: colors.Black,
  },
  compTitles: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.font15,
    color: colors.Black,
  },
  date: {
    marginLeft: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
    color: colors.Gray,
  },
  navigation: {
    marginLeft: dimensions.Width / 30,
    marginVertical: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font14,
    color: colors.InfoText,
  },
});

export default TextCustom;
