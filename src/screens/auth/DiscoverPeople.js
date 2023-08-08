import {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/Auth/CustomButton';
import TextCustom from '../../components/Auth/TextCustom';
import {useNavigation} from '@react-navigation/native';
import Images from '../../utils/Images';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Data from '../../utils/Data';

const DiscoverPeople = () => {
  const [users, setUsers] = useState(Data.Users);
  const navigation = useNavigation();

  const handlePress = item => {
    const index = users.findIndex(user => user.id === item.id);
    setUsers(prevState =>
      prevState.map((user, i) => ({
        ...user,
        followed: i === index ? !user.followed : user.followed,
      })),
    );
  };
  return (
    <ScrollView style={styles.container}>
      <TextCustom
        text="Discover People"
        textType="Headings"
        color={colors.Headings}
      />
      <TextCustom
        text="Unlock networking opportunities and foster meaningful connections."
        textType="InfoText"
        color={colors.InfoText}
      />
      <View style={styles.usersDisplay}>
        {users.map(
          (item, index) =>
            index % 2 === 0 && (
              <View style={styles.row} key={item.id}>
                <View style={styles.component}>
                  <Image
                    style={styles.profile}
                    source={Images[item.user_image]}
                  />
                  <View style={styles.textContainer}>
                    <TextCustom
                      text={item.user_name}
                      textType="Name"
                      color={colors.InfoText}
                    />
                    <TextCustom
                      text={item.designation}
                      textType="Designation"
                      color={colors.InfoText}
                    />
                  </View>
                  <View style={styles.manageContainer}>
                    <CustomButton
                      text={item.followed ? 'Following' : 'Follow'}
                      height={dimensions.Height / 40}
                      width={dimensions.Width / 6}
                      backgroundColor={
                        item.followed ? colors.badgeSelected : colors.Primary
                      }
                      color={colors.White}
                      onClick={() => handlePress(item)}
                    />
                  </View>
                </View>
                {users[index + 1] && (
                  <View style={styles.component}>
                    <Image
                      style={styles.profile}
                      source={Images[users[index + 1].user_image]}
                    />
                    <View style={styles.textContainer}>
                      <TextCustom
                        text={users[index + 1].user_name}
                        textType="Name"
                        color={colors.InfoText}
                      />
                      <TextCustom
                        text={users[index + 1].designation}
                        textType="Designation"
                        color={colors.InfoText}
                      />
                    </View>
                    <View style={styles.manageContainer}>
                      <CustomButton
                        text={
                          users[index + 1].followed ? 'Following' : 'Follow'
                        }
                        height={dimensions.Height / 40}
                        width={dimensions.Width / 6}
                        backgroundColor={
                          users[index + 1].followed
                            ? colors.badgeSelected
                            : colors.Primary
                        }
                        color={colors.White}
                        onClick={() => handlePress(users[index + 1])}
                      />
                    </View>
                  </View>
                )}
              </View>
            ),
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: dimensions.Height / 20,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 100,
  },
  usersDisplay: {
    paddingTop: dimensions.Width / 30,
    paddingHorizontal: dimensions.Width / 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  component: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.Black,
    elevation: 5,
    backgroundColor: colors.White,
    marginVertical: dimensions.Width / 30,
    marginHorizontal: dimensions.Width / 50,
    width: dimensions.Width / 2.5,
    height: dimensions.Width / 2,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'center',
    marginTop: dimensions.Height / 100,
  },
  manageContainer: {
    position: 'absolute',
    bottom: -20,
  },
  profile: {
    height: dimensions.Width / 4,
    resizeMode: 'cover',
    width: dimensions.Width / 4,
    borderColor: colors.Primary,
    borderRadius: dimensions.Width / 50,
  },
});

export default DiscoverPeople;
