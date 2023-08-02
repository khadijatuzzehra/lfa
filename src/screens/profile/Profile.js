import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import TextCustom from '../../components/Auth/TextCustom';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Data from '../../utils/Data';
import Images from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const handleNavigation = nav => {
    navigation.navigate(nav);
  };
  const profileNav = Data.ProfileNavigation;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Images.coverPhoto} style={styles.image} />
        <View style={styles.profile}>
          <Image source={Images.userPhoto} style={styles.userPhoto} />
          <TouchableOpacity style={styles.badgeContainer}>
            <Images.EditLogo />
          </TouchableOpacity>
        </View>
        <TextCustom text="Sarah Faraway" textType="HomeScreenHeadings" />
      </View>
      <Image source={Images.Bottom} style={styles.seperator} />
      <View style={styles.bottomContainer}>
        {profileNav.map(item => (
          <TouchableOpacity
            style={styles.row}
            key={item.id}
            onPress={() => handleNavigation(item.navigation)}>
            <View style={styles.rowStart}>
              <Image source={Images[item.image]} style={styles.image} />
              <TextCustom text={item.name} textType="Navigation" />
            </View>
            <View style={styles.rowEnd}>
              <Images.Arrow />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  topContainer: {
    height: dimensions.Height / 3,
    width: dimensions.Width,
    paddingTop: dimensions.Height / 50,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'gray',
    borderBottomWidth: 0.2,
  },
  seperator: {
    width: dimensions.Width,
    marginVertical: dimensions.Width / 10,
  },
  bottomContainer: {
    height: dimensions.Height / 2.5,
    width: dimensions.Width,
    backgroundColor: colors.WhiteDull,
    paddingHorizontal: dimensions.Width / 30,
    borderRadius: 30,
    borderColor: 'gray',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowEnd: {
    justifyContent: 'center',
  },
  profile: {
    position: 'absolute',
    marginTop: dimensions.Height / 8,
  },
  userPhoto: {
    height: dimensions.Height / 8,
    width: dimensions.Height / 8,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.White,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
});
export default Profile;
