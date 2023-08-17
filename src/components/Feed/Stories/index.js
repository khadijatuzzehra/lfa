import React, {useState, useRef} from 'react';
import InstaStory from 'react-native-insta-story';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import {handlePostStorySelection} from '../../../utils/GlobalFunctions';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';

const Stories = () => {
  const videoRef = useRef(null);
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [isVisible, setVisible] = useState(false);
  const data = Data.StoriesData;
  const userId = 1;
  const user = data.find(item => item.user_id === userId);
  const filteredData = data.filter(userData => userData.stories.length > 0);
  const handleClick = async () => {
    const mediaRes = await handlePostStorySelection();
    if (mediaRes) {
      setMedia(mediaRes);
      let type = mediaRes.assets[0].type;
      setMediaType(type);
      setVisible(true);
    }
  };

  const handleVideoProgress = ({currentTime}) => {
    if (currentTime >= 12) {
      console.log('playing again');
      videoRef.current.seek(0);
    }
  };

  const renderMedia = () => {
    if (mediaType === 'image/jpeg') {
      return (
        <Image
          source={{
            uri: media.assets[0].uri,
          }}
          style={styles.image}
        />
      );
    } else if (mediaType === 'video/mp4') {
      return (
        <Video
          ref={videoRef}
          source={{uri: media.assets[0].uri}}
          style={styles.image}
          resizeMode="contain"
          onProgress={handleVideoProgress}
          repeat
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      {user.stories.length < 1 && (
        <TouchableOpacity
          style={styles.yourStory}
          onPress={() => handleClick()}>
          <Image source={Images.ProfilePicture} style={styles.avatar} />
          <View style={styles.badgeContainer}>
            <View>
              <Image source={Images.AddButton} style={styles.badge} />
            </View>
          </View>
          <Text
            style={{
              color: colors.Headings,
              fontSize: fonts.size.font10,
              fontFamily: fonts.family.medium,
              marginTop: 6,
            }}>
            Your Story
          </Text>
        </TouchableOpacity>
      )}
      <InstaStory
        data={filteredData}
        duration={12}
        unPressedBorderColor={colors.Primary}
        pressedBorderColor={colors.LightestGray}
        unPressedAvatarTextColor={colors.Headings}
        pressedAvatarTextColor={colors.Headings}
        avatarSize={75}
        avatarTextStyle={{
          fontSize: fonts.size.font10,
          fontFamily: fonts.family.medium,
          color: colors.Headings,
        }}
      />
      {media && (
        <Modal
          isVisible={isVisible}
          onBackdropPress={() => setVisible(false)}
          unmountOnHide={true}
          backdropColor="rgba(0, 0, 0, 0.5)">
          <View style={styles.modalContainer}>{renderMedia()}</View>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.close}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: dimensions.Width / 100,
  },
  avatar: {
    height: 75,
    width: 75,
    marginTop: dimensions.Height / 150,
    resizeMode: 'cover',
  },
  yourStory: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    zIndex: 1,
  },

  badge: {
    backgroundColor: colors.Primary,
    borderRadius: 10,
    height: dimensions.Width / 20,
    width: dimensions.Width / 20,
  },
  modalContainer: {
    height: dimensions.Height,
    width: dimensions.Width,
    backgroundColor: 'black',
    left: -20,
  },
  image: {
    height: dimensions.Height,
    width: dimensions.Width,
    resizeMode: 'contain',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  closeText: {
    color: colors.red,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
  },
});

export default Stories;
