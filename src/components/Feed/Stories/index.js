import React, {useState} from 'react';
import InstaStory from 'react-native-insta-story';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import Data from '../../../utils/Data';
import Images from '../../../utils/Images';

import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';

const Stories = () => {
  const [image, setImage] = useState(null);
  const handlePress = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});
      if (!response.didCancel) {
        setImage(response);
      } else {
        console.log('Image selection cancelled.');
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const data = Data.StoriesData;
  const userId = 1;
  const user = data.find(item => item.user_id === userId);
  const filteredData = data.filter(user => user.stories.length > 0);

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {user.stories.length < 1 && (
        <TouchableOpacity
          style={styles.yourStory}
          onPress={() => handlePress()}>
          <Image source={Images.ProfilePicture} style={styles.avatar} />
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Image source={Images.AddButton} />
            </View>
          </View>
          <Text
            style={{
              color: colors.Headings,
              fontSize: fonts.size.font10,
              fontFamily: fonts.family.medium,
            }}>
            Your Story
          </Text>
        </TouchableOpacity>
      )}
      <InstaStory
        data={filteredData}
        duration={10}
        unPressedBorderColor={colors.Primary}
        pressedBorderColor={colors.LightestGray}
        unPressedAvatarTextColor={colors.Headings}
        pressedAvatarTextColor={colors.Headings}
        avatarTextStyle={{
          fontSize: fonts.size.font10,
          fontFamily: fonts.family.medium,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    height: 64,
    width: 64,
    resizeMode: 'cover',
  },
  yourStory: {
    marginTop: dimensions.Height / 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: -2,
    zIndex: 1,
  },
  badge: {
    backgroundColor: colors.Primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Stories;
