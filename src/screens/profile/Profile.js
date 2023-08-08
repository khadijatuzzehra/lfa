import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
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
  const profileNav2 = Data.ProfileNavigation2;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View>
            <Image source={Images.coverPhoto} style={styles.coverPhoto} />
          </View>
          <View style={styles.profile}>
            <View style={styles.profile}>
              <Image source={Images.userPhoto} style={styles.userPhoto} />
              <TouchableOpacity style={styles.badgeContainer}>
                <Images.EditLogo />
              </TouchableOpacity>
            </View>
            <View style={styles.text}>
              <TextCustom
                text="Sarah Forest"
                textType="HomeScreenHeadings"
                color={colors.White}
              />
              <TextCustom
                text="One step at a time, I will reach my destination."
                textType="Date"
                color={colors.White}
              />
            </View>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <TextCustom
            text="My Account"
            textType="Headings"
            color={colors.Black}
          />
        </View>
        <View style={styles.bottomContainer}>
          {profileNav.map(item => {
            const SVGComponent = Images[item.image];
            return (
              <TouchableOpacity
                style={styles.row}
                key={item.id}
                onPress={() => handleNavigation(item.navigation)}>
                <View style={styles.rowStart}>
                  <SVGComponent style={styles.image} />
                  <TextCustom
                    text={item.name}
                    textType="Navigation"
                    color={colors.InfoText}
                  />
                </View>
                <View style={styles.rowEnd}>
                  <Images.Arrow />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.bottomContainer}>
          {profileNav2.map(item => {
            const SVGComponent = Images[item.image];
            return (
              <TouchableOpacity
                style={styles.row}
                key={item.id}
                onPress={() => handleNavigation(item.navigation)}>
                <View style={styles.rowStart}>
                  <SVGComponent style={styles.image} />
                  <TextCustom
                    text={item.name}
                    textType="Navigation"
                    color={colors.InfoText}
                  />
                </View>
                <View style={styles.rowEnd}>
                  <Images.Arrow />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WhiteDull,
    alignItems: 'center',
  },
  image: {
    height: dimensions.Height / 40,
    width: dimensions.Height / 40,
    resizeMode: 'contain',
  },
  coverPhoto: {
    width: dimensions.Width,
    height: dimensions.Height / 4,
    resizeMode: 'stretch',
  },
  topContainer: {
    height: dimensions.Height / 4,
    width: dimensions.Width,
  },
  centerContainer: {
    height: dimensions.Height / 15,
    width: dimensions.Width,
    justifyContent: 'center',
    backgroundColor: colors.WhiteDull,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    top: -dimensions.Width / 20,
  },
  text: {
    position: 'absolute',
    marginTop: dimensions.Height / 15,
    marginLeft: dimensions.Width / 4,
  },
  bottomContainer: {
    width: dimensions.Width / 1.1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 20,
    paddingVertical: dimensions.Width / 30,
    borderRadius: 20,
    shadowColor: colors.borderColor,
    elevation: 5,
    marginBottom: dimensions.Width / 20,
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
    marginTop: dimensions.Height / 25,
    marginLeft: dimensions.Width / 100,
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
    bottom: 10,
    right: 5,
    zIndex: 1,
  },
});
export default Profile;
