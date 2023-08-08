import React, {useState} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import TextCustom from '../../../components/Auth/TextCustom';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';
const Posts = () => {
  const [posts, setPosts] = useState(Data.PostsData);
  let imgSrc = Images.LikedOutline;
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
          showsHorizontalScrollIndicator={true}
          snapToInterval={dimensions.Width}>
          {item.images &&
            item.images.map((imageVariable, imageIndex) => (
              <Image
                key={imageIndex}
                source={Images[imageVariable]}
                style={styles.postImage}
              />
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
          <Text style={{color: 'white'}}>.</Text>
          <Text style={styles.postText}>{item.post_text}</Text>
        </Text>
      </View>
    );
  };
  return (
    <FlatList data={posts} renderItem={renderItem} style={styles.container} />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    paddingVertical: dimensions.Height / 100,
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
    marginHorizontal: dimensions.Width / 50,
  },
  profile: {
    height: dimensions.Height / 20,
    width: dimensions.Height / 20,
    borderWidth: 2,
    borderColor: colors.Primary,
    borderRadius: dimensions.Width / 20,
  },
  userName: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Black,
    marginHorizontal: dimensions.Width / 80,
  },
  postText: {
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.light,
    color: 'black',
  },
  postImage: {
    width: dimensions.Width,
    height: dimensions.Height / 2,
    resizeMode: 'contain',
    marginVertical: dimensions.Width / 30,
    borderRadius: 4,
  },
  likeComment: {
    marginRight: dimensions.Width / 20,
    marginBottom: dimensions.Width / 50,
  },
  likes: {
    fontWeight: 'bold',
    color: colors.Black,
    marginHorizontal: dimensions.Width / 80,
  },
});

export default Posts;
