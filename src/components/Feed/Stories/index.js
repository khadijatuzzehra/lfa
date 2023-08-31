import React, {useState, useRef, useEffect} from 'react';
import InstaStory from 'react-native-insta-story';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';
import PictureOptions from '../../Shared/PictureOptions';
import {PERMISSIONS, request, requestMultiple} from 'react-native-permissions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Stories = ({EmptyListMessage}) => {
  const videoRef = useRef(null);
  const [optionModal, optionModalVisible] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(true);
  const data = Data.StoriesData;
  const user = data.filter(userData => userData.user_id === 1);
  const filteredData = data.filter(
    userData => userData.stories.length > 0 && userData.user_id !== 1,
  );
  const handleClick = async () => {
    optionModalVisible(true);
  };

  const onSelect = async item => {
    if (item === 'Camera') {
      try {
        request(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.CAMERA
            : PERMISSIONS.ANDROID.CAMERA,
        ).then(async result => {
          if (result === 'granted') {
            const response = await launchCamera({
              mediaType: 'photo',
              minWidth: 100,
              minHeight: 100,
            });

            if (!response.didCancel && !response.error) {
              setMedia(response);
              let type = response?.assets[0].type;
              setMediaType(type);
              optionModalVisible(false);
              setVisible(true);
            } else {
              console.log('Camera launch cancelled or error occurred.');
            }
          } else {
            console.log('Camera permission denied.');
          }
        });
      } catch (error) {
        console.log('Error:', error);
      }
    }

    if (item === 'Gallery') {
      try {
        const permissionsToRequest =
          Platform.OS === 'ios'
            ? [PERMISSIONS.IOS.PHOTO_LIBRARY]
            : [
                PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
                PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
              ];

        const results = await requestMultiple(permissionsToRequest);

        const allGranted = Object.values(results).every(
          result => result === 'granted',
        );

        if (allGranted) {
          const response = await launchImageLibrary({
            mediaType: 'mixed',
            minWidth: 100,
            minHeight: 100,
          });

          if (!response.didCancel && !response.error) {
            console.log(response);
            setMedia(response);
            let type = response.assets[0].type;
            setMediaType(type);
            optionModalVisible(false);
            setVisible(true);
          } else {
            console.log('Gallery launch cancelled or error occurred.');
          }
        } else {
          console.log('Some permissions were denied.');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    } else if (item === '') {
      optionModalVisible(false);
    }
  };

  const handleVideoProgress = ({currentTime}) => {
    if (currentTime >= 12) {
      videoRef.current.seek(0);
    }
  };
  useEffect(() => {
    const allStoriesEmpty = data.every(
      userData => userData.stories.length <= 0,
    );
    if (allStoriesEmpty) {
      EmptyListMessage('No data found');
      setIsListEmpty(true);
    } else {
      setIsListEmpty(false);
    }
  }, [EmptyListMessage, data]);

  const renderMedia = () => {
    if (
      mediaType === 'image/jpeg' ||
      mediaType === 'image/png' ||
      mediaType === 'image/jpg'
    ) {
      return (
        <Image
          source={{
            uri: media.assets[0].uri,
          }}
          style={styles.image}
          resizeMode="contain"
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
      {user[0].stories.length === 0 && (
        <TouchableOpacity
          style={styles.yourStory}
          onPress={() => handleClick()}>
          <Image source={Images.userImage} style={styles.avatar} />
          <View style={styles.badgeContainer}>
            <View>
              <Image source={Images.AddButton} style={styles.badge} />
            </View>
          </View>
          <Text style={styles.yourStoryText}>Your Story</Text>
        </TouchableOpacity>
      )}
      {(user[0].stories.length > 0 || !isListEmpty) && (
        <InstaStory
          data={
            user[0].stories.length === 0
              ? filteredData
              : [user[0], ...filteredData]
          }
          duration={12}
          unPressedBorderColor={colors.Primary}
          pressedBorderColor={colors.PaleGray}
          unPressedAvatarTextColor={colors.Headings}
          pressedAvatarTextColor={colors.Headings}
          avatarSize={75}
          avatarTextStyle={{
            fontSize: fonts.size.font10,
            fontFamily: fonts.family.medium,
            color: colors.Headings,
          }}
        />
      )}
      {user[0].stories.length > 0 && (
        <TouchableOpacity
          style={styles.badgeContainer2}
          onPress={() => handleClick()}>
          <Image source={Images.AddButton} style={styles.badge2} />
        </TouchableOpacity>
      )}
      {media && (
        <Modal
          isVisible={isVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          hasBackdrop
          onBackdropPress={() => setVisible(false)}
          backdropOpacity={0.6}
          backdropColor="rgba(0, 0, 0, 0.5)">
          <View style={styles.modalContainer}>{renderMedia()}</View>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.close}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Modal>
      )}
      {optionModal && (
        <PictureOptions onCancel={onSelect} onSelect={onSelect} />
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
    borderRadius: 100,
  },
  yourStory: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
  },
  yourStoryText: {
    color: colors.Headings,
    fontSize: fonts.size.font10,
    fontFamily: fonts.family.medium,
    marginTop: 6,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    zIndex: 1,
    padding: 30,
  },

  badge: {
    backgroundColor: colors.Primary,
    borderRadius: 20,
    height: 25,
    width: 25,
  },
  badgeContainer2: {
    position: 'absolute',
    bottom: 35,
    left: 75,
    zIndex: 1,
  },
  badge2: {
    backgroundColor: colors.Primary,
    borderRadius: 20,
    height: 25,
    width: 25,
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
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  closeText: {
    color: colors.Red,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
  },
});

export default Stories;
