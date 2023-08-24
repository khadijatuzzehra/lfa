import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import TextCustom from '../../../components/Shared/TextCustom';
import Dropdown from '../../../components/Auth/Dropdown';
import PictureOptions from '../../../components/Shared/PictureOptions';
import {handleCameraPress, handlePress} from '../../../utils/GlobalFunctions';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../../store/ActionTypes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import styles from './styles';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import Data from '../../../utils/Data';
import Images from '../../../utils/Images';

const Profile = () => {
  const [dropdown, setDropdown] = useState(false);
  const [optionModal, setOptionModal] = useState(false);

  const [profileImage, setProfileImage] = useState('');
  const [imageType, setImageType] = useState('');

  const [coverImage, setCoverImage] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigation = async nav => {
    if (nav === 'SignOut') {
      try {
        const {idToken} = await GoogleSignin.getTokens();
        if (idToken) {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        }
        await AsyncStorage.removeItem('userInfo');
        dispatch({type: LOGOUT, payload: null});
      } catch (error) {
        await AsyncStorage.removeItem('userInfo');
        dispatch({type: LOGOUT, payload: null});
      }
    } else {
      navigation.navigate(nav);
    }
  };

  const handleClick = () => {
    setDropdown(true);
  };
  const handleChange = item => {
    setDropdown(false);
    if (item === 'Edit Profile' || item === 'Edit Cover') {
      setImageType(item);
      setTimeout(() => {
        setOptionModal(true);
      }, 200);
    } else {
      setOptionModal(false);
    }
  };

  const onSelect = async item => {
    const handleImageSelection = async setImageFunc => {
      let imageRes;
      if (item === 'Camera') {
        imageRes = await handleCameraPress();
      } else if (item === 'Gallery') {
        imageRes = await handlePress();
      }
      if (imageRes) {
        setImageFunc(imageRes);
      }
    };
    if (imageType === 'Edit Cover') {
      await handleImageSelection(setCoverImage);
    } else if (imageType === 'Edit Profile') {
      await handleImageSelection(setProfileImage);
    }
    setOptionModal(false);
  };

  const renderNavItems = navData => {
    return navData.map((item, index) => {
      const SVGComponent = Images[item.image];
      return (
        <View key={item.id}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => handleNavigation(item.navigation)}>
            <View style={styles.rowStart}>
              <View style={styles.image}>
                <SVGComponent />
              </View>
              <TextCustom
                text={item.name}
                textType="Navigation"
                color={colors.BlueGray}
              />
            </View>
            <View style={styles.rowEnd}>
              <Images.Arrow />
            </View>
          </TouchableOpacity>
          {index < navData.length - 1 && (
            <Image source={Images.AlertLine} style={styles.line} />
          )}
        </View>
      );
    });
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          {coverImage && coverImage.assets ? (
            <Image
              source={{uri: coverImage.assets[0].uri}}
              style={styles.coverPhoto}
            />
          ) : (
            <Image source={Images.coverPhoto} style={styles.coverPhoto} />
          )}
          <TouchableOpacity
            style={styles.badgeContainer}
            onPress={() => handleClick()}>
            <Images.EditLogo />
          </TouchableOpacity>
          {dropdown && (
            <Dropdown
              height={dimensions.Height / 40}
              width={dimensions.Width / 3}
              placeholder="Image"
              onClick={handleChange}
              dropdownValues={Data.ImageOption}
            />
          )}
          {optionModal ? (
            <PictureOptions onCancel={onSelect} onSelect={onSelect} />
          ) : null}

          <View style={styles.profile}>
            <View style={styles.profile}>
              {profileImage && profileImage.assets ? (
                <Image
                  source={{uri: profileImage.assets[0].uri}}
                  style={styles.userPhoto}
                />
              ) : (
                <Image source={Images.userImage} style={styles.userPhoto} />
              )}
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
                color={colors.Badge}
              />
            </View>
          </View>
        </View>

        <View style={styles.centerContainer}>
          <TextCustom
            text="My Account"
            textType="HomeScreenHeadings"
            color={colors.Black}
          />
        </View>
        <View style={styles.bottomContainer}>
          {renderNavItems(Data.ProfileNavigation)}
        </View>
        <View style={styles.bottomContainer}>
          {renderNavItems(Data.ProfileNavigation2)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
