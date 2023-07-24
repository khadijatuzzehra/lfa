import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

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
  return (
    <View style={styles.container}>
      <Text style={styleUse}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headings: {
    marginHorizontal: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font20,
    color: colors.Headings,
  },
  infoText: {
    marginHorizontal: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    color: colors.InfoText,
  },
  labels: {
    marginHorizontal: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Black,
  },
});

export default TextCustom;
