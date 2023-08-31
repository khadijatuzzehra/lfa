import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Images from '../../../utils/Images';

import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';

const Header = () => {
  const notifications = 1;
  return (
    <View style={styles.header}>
      <Image source={Images.Logo} style={styles.logo} />
      <TouchableOpacity style={styles.content}>
        <Images.Bell />
        {notifications > 0 && (
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.Width / 30,
    backgroundColor: colors.White,
    shadowColor: colors.borderColor,
    shadowRadius: 2,
    elevation: 12,
  },
  logo: {
    height: dimensions.Width / 10,
    width: dimensions.Width / 5,
    resizeMode: 'stretch',
  },
  content: {
    alignItems: 'center',
    marginRight: dimensions.Width / 60,
    justifyContent: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
    zIndex: 1,
  },
  badge: {
    backgroundColor: colors.Primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.White,
    fontSize: fonts.size.font12,
  },
});
