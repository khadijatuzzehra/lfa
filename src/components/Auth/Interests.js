import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import theme
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';
const Interest = ({interest, selectedInterests, setSelectedInterests}) => {
  const isSelected = selectedInterests.includes(interest);
  const badgeBackgroundColor = isSelected ? colors.badgeSelected : colors.badge;

  const handlePress = () => {
    if (isSelected) {
      setSelectedInterests(prevInterests =>
        prevInterests.filter(item => item !== interest),
      );
    } else {
      setSelectedInterests(prevInterests => [...prevInterests, interest]);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, {backgroundColor: badgeBackgroundColor}]}>
        <Text style={styles.text}>{interest}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.Width / 100,
    paddingHorizontal: dimensions.Width / 50,
    borderRadius: 4,
    margin: dimensions.Width / 100,
  },
  text: {
    color: colors.White,
    fontFamily: fonts.family.bold,
  },
});

export default Interest;
