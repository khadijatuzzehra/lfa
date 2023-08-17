import React, {useState, useEffect} from 'react';
import {SafeAreaView, Image, View, StyleSheet, Alert} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import Header from '../../components/Feed/Header';
import AnimatedLoader from './AnimatedLoader';
import Stories from '../../components/Feed/Stories';
import Posts from '../../components/Feed/Posts';
import Images from '../../utils/Images';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(1);
  const EmptyListMessage = () => {
    setLoading(false);
    Alert.alert('No data found');
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loading ? (
          <AnimatedLoader />
        ) : (
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
              <Posts ListEmpty={EmptyListMessage} />
            </View>
          </ScrollView>
        )}
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
