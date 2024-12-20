import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';
const Interest = ({interest, selectedInterests, setSelectedInterests}) => {
  const isSelected = selectedInterests.includes(interest);
  const badgeBackgroundColor = isSelected ? colors.Secondary : colors.Badge;

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
    padding: dimensions.Width / 80,
    marginVertical: dimensions.Width / 100,
    marginRight: dimensions.Width / 100,
    borderRadius: 20,
    minWidth: dimensions.Width / 6,
  },
  text: {
    color: colors.White,
    textAlign: 'center',
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font11,
  },
});

export default Interest;
