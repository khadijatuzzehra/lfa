import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../../components/Feed/Header';
import AnimatedLoader from './AnimatedLoader';
import Stories from '../../components/Feed/Stories';
import Posts from '../../components/Feed/Posts';
import Images from '../../utils/Images';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import {
  registerDeviceForMessaging,
  requestUserPermission,
  notificationListener,
} from '../../utils/NotificationServices';
const Feed = () => {
  const [loading, setLoading] = useState(true);
  const HandleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      registerDeviceForMessaging();
      requestUserPermission();
      notificationListener();
    }
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {loading ? (
        <AnimatedLoader />
      ) : (
        <ScrollView>
          <View style={styles.stories}>
            <Image source={Images.AlertLine} style={styles.line} />
            <Stories EmptyListMessage={HandleLoad} />
            <Image source={Images.AlertLine} style={styles.line} />
          </View>
          <View style={styles.posts}>
            <Posts ListEmpty={HandleLoad} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.White,
  },

  stories: {
    marginBottom: 2,
  },
  posts: {
    flex: 1,
  },
  line: {
    width: dimensions.Width,
  },
});
