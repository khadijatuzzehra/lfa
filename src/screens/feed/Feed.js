import React, {useState} from 'react';
import {SafeAreaView, Image, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import Header from '../../components/Feed/Header';
import Stories from '../../components/Feed/Stories';
import Posts from '../../components/Feed/Posts';
import Images from '../../utils/Images';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';

const Feed = () => {
  const [notifications, setNotifications] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.stories}>
          <Image source={Images.AlertLine} style={styles.line} />
          <View style={styles.stories}>
            <Stories />
          </View>
          <Image source={Images.AlertLine} style={styles.line} />
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
    marginVertical: 2,
  },
  posts: {
    flex: 1,
  },
  line: {
    width: dimensions.Width,
  },
});
