import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';

import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';

const Header = () => {
  const [notifications, setNotifications] = useState(1);
  return (
    <View style={styles.header}>
      <Image source={Images.Logo} />
      <View style={styles.content}>
        <Images.Bell />
        {notifications > 0 && (
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeText: {
    color: 'black',
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
