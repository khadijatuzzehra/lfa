import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import Header from '../../components/Feed/Header';

const AnimatedLoader = () => {
  return (
    <>
      <Header />
      <SkeletonPlaceholder>
        <View style={styles.skeletonContainer}>
          <View style={styles.skeletonStories}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View>
          <View style={styles.skeletonPosts}>
            <View style={styles.postsHeader}>
              <View style={styles.circle} />
              <View style={styles.skeletonLogo} />
            </View>

            <View style={styles.skeletonPostImage} />
            <View style={styles.postsHeader}>
              <View style={styles.skeletonPostUsername} />
              <View style={styles.skeletonPostData} />
            </View>
          </View>
          <View style={styles.skeletonPosts}>
            <View style={styles.postsHeader}>
              <View style={styles.circle} />
              <View style={styles.skeletonLogo} />
            </View>
            <View style={styles.skeletonPostImage} />
            <View style={styles.postsHeader}>
              <View style={styles.skeletonPostUsername} />
              <View style={styles.skeletonPostData} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {},
  skeletonHeader: {
    width: dimensions.Width,
    height: dimensions.Width / 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skeletonLogo: {
    width: dimensions.Width / 3,
    height: dimensions.Width / 10,
    borderRadius: 10,
    margin: dimensions.Width / 50,
  },
  skeletonStories: {
    width: dimensions.Width,
    height: dimensions.Width / 5,
    marginBottom: 10,
    flexDirection: 'row',
    marginHorizontal: dimensions.Width / 100,
  },
  postsHeader: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  skeletonPosts: {
    width: dimensions.Width,
    height: dimensions.Height / 2,
    marginVertical: 10,
  },
  skeletonPostImage: {
    width: dimensions.Width,
    height: dimensions.Height / 3.5,
    marginVertical: 10,
  },
  skeletonPostData: {
    width: dimensions.Width / 2,
    height: dimensions.Width / 20,
    borderRadius: 10,
    margin: 10,
  },
  skeletonPostUsername: {
    width: dimensions.Width / 3,
    height: dimensions.Width / 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  circle: {
    borderRadius: 100,
    height: 80,
    width: 80,
    marginHorizontal: dimensions.Width / 100,
  },
});
export default AnimatedLoader;
