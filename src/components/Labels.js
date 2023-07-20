import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const Labels = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    marginHorizontal: dimensions.Width / 30,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Black,
  },
});

export default Labels;
