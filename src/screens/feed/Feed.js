import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import TextCustom from '../../components/TextCustom';
import Header from '../../components/Header';

import Images from '../../utils/Images';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';

const Feed = () => {
  const [notifications, setNotifications] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 100,
  },
});
