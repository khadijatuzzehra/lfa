import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const InfoText = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    color: colors.LightestGray,
  },
});

export default InfoText;
