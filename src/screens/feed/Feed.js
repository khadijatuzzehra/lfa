import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import Header from '../../components/Feed/Header';
import Stories from '../../components/Feed/Stories';
import Posts from '../../components/Feed/Posts';
import Images from '../../utils/Images';
import Data from '../../utils/Data';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';

const Feed = () => {
  const [notifications, setNotifications] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.stories}>
          <Stories />
        </View>
        <View style={styles.posts}>
          <Posts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  stories: {
    marginVertical: dimensions.Height / 50,
    height: dimensions.Height / 10,
    Width: dimensions.Width / 50,
  },
  posts: {
    flex: 1,
  },
});
