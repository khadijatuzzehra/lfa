import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';
const Posts = ({ListEmpty}) => {
  const [posts, setPosts] = useState(Data.PostsData);

  useEffect(() => {
    if (posts.length === 0) {
      ListEmpty('No Data Found');
    }
  }, [posts, ListEmpty]);

  const handleLike = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  const renderItem = ({item}) => {
    if (posts.length > 0) {
      const imgSrc = item.liked ? Images.Liked : Images.LikedOutline;
      return (
        <View style={styles.post}>
          <View style={styles.row}>
            <View style={styles.rowStart}>
              <Image style={styles.profile} source={Images[item.user_image]} />
              <Text style={styles.userName}>{item.user_name}</Text>
              <Images.Verified />
            </View>
            <TouchableOpacity style={styles.rowEnd}>
              <Images.Options />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.horizontalScrollView}
            horizontal
            decelerationRate="fast"
            snapToInterval={dimensions.Width}>
            {item.images &&
              item.images.map((imageVariable, imageIndex) => (
                <View key={imageIndex}>
                  <Image
                    source={Images[imageVariable]}
                    style={styles.postImage}
                  />
                  {item.images.length > 1 && (
                    <View style={styles.paginationContainer}>
                      <Text style={styles.paginationText}>
                        {item.images
                          ? `${imageIndex + 1}/${item.images.length}`
                          : ''}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
          </ScrollView>

          <View style={styles.rowIcons}>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Image source={imgSrc} style={styles.likeComment} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.Comment} style={styles.likeComment} />
            </TouchableOpacity>
          </View>
          <Text style={styles.likes}>{item.likes} Likes</Text>
          <Text style={styles.userName}>
            {item.user_name}
            <Text style={styles.postText}> {item.post_text}</Text>
          </Text>
        </View>
      );
    }
  };
  return (
    <FlatList
      data={posts}
      scrollEnabled={false}
      renderItem={renderItem}
      style={styles.container}
      ListEmptyComponent={<View />}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    marginVertical: dimensions.Height / 70,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: dimensions.Width / 50,
  },
  rowStart: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowEnd: {
    marginRight: dimensions.Width / 30,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: dimensions.Width / 50,
    marginBottom: dimensions.Width / 50,
  },
  profile: {
    height: 55,
    width: 55,
    borderWidth: 2,
    borderColor: colors.Primary,
    borderRadius: 100,
  },
  userName: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.font12,
    color: colors.Black,
    marginHorizontal: dimensions.Width / 50,
  },
  postText: {
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.regular,
    color: 'black',
  },
  postImage: {
    width: dimensions.Width,
    height: dimensions.Height / 2,
    resizeMode: 'cover',
    marginVertical: dimensions.Width / 50,
    borderRadius: 4,
  },
  likeComment: {
    height: dimensions.Height / 35,
    width: dimensions.Width / 20,
    resizeMode: 'contain',
    marginRight: dimensions.Width / 20,
  },
  likes: {
    color: colors.Black,
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.medium,
    marginHorizontal: dimensions.Width / 50,
  },
  paginationText: {
    color: 'white',
    fontSize: fonts.size.font13,
    fontFamily: fonts.family.semiBold,
  },
  paginationContainer: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
});

export default Posts;
