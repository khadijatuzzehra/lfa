import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import CustomButton from '../../../components/Auth/CustomButton';
import TextCustom from '../../../components/Shared/TextCustom';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import Data from '../../../utils/Data';

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

  const onNext = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextCustom
          text="Discover People"
          textType="Headings"
          color={colors.Headings}
        />
        <TextCustom
          text={
            'Unlock networking opportunities and foster\nmeaningful connections.'
          }
          textType="InfoText"
          color={colors.InfoText}
        />
        <View style={styles.usersDisplay}>
          {users.map(
            (item, index) =>
              index % 2 === 0 && (
                <View style={styles.row} key={item.id}>
                  <View style={styles.component}>
                    <View style={styles.imageShadow}>
                      <Image
                        style={styles.profile}
                        source={Images[item.user_image]}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <TextCustom
                        text={item.user_name}
                        textType="Name"
                        color={colors.Headings}
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
                          item.followed ? colors.Secondary : colors.AccentColor
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
                          color={colors.Headings}
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
                              ? colors.Secondary
                              : colors.AccentColor
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onNext} style={styles.button}>
          <TextCustom
            text="skip"
            textType="OnBoardingText"
            color={colors.InfoText}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext} style={styles.button}>
          <TextCustom text="Next" textType="Button" color={colors.Primary} />
        </TouchableOpacity>
      </View>
    </View>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: colors.White,
    marginVertical: dimensions.Width / 30,
    marginHorizontal: dimensions.Width / 50,
    width: dimensions.Width / 2.5,
    height: dimensions.Height / 3.5,
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
    height: dimensions.Width / 3.2,
    resizeMode: 'cover',
    width: dimensions.Width / 4,
    borderColor: colors.Primary,
    borderRadius: dimensions.Width / 50,
  },
  imageShadow: {
    shadowColor: colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: dimensions.Height / 20,
    paddingTop: dimensions.Height / 10,
    paddingHorizontal: dimensions.Width / 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default DiscoverPeople;
