import React, {useState} from 'react';
import InstaStory from 'react-native-insta-story';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {handlePress} from '../../../utils/GlobalFunctions';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';

const Stories = () => {
  const [image, setImage] = useState(null);
  const data = Data.StoriesData;
  const userId = 1;
  const user = data.find(item => item.user_id === userId);
  const filteredData = data.filter(userData => userData.stories.length > 0);

  const handleClick = async () => {
    const imageRes = await handlePress();
    if (imageRes) {
      setImage(imageRes);
      console.log(image);
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
          color: colors.Headings,
        }}
      />
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
    height: dimensions.Width / 7,
    width: dimensions.Width / 7,
    marginBottom: dimensions.Height / 180,
    resizeMode: 'cover',
  },
  yourStory: {
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Stories;
