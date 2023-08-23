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
  const [dropdown, dropdownVisible] = useState(false);
  const [optionModal, optionModalVisible] = useState(false);
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
        AsyncStorage.removeItem('userInfo').then(() => {
          dispatch({type: LOGOUT, payload: null});
        });
      } catch (error) {
        AsyncStorage.removeItem('userInfo').then(() => {
          dispatch({type: LOGOUT, payload: null});
        });
      }
    } else {
      navigation.navigate(nav);
    }
  };
  const handleClick = () => {
    dropdownVisible(true);
  };
  const handleChange = async item => {
    dropdownVisible(false);
    if (item === '') {
      optionModalVisible(false);
    } else {
      optionModalVisible(!optionModal);
      setImageType(item);
    }
  };
  const onSelect = async item => {
    optionModalVisible(!optionModal);
    if (imageType === 'Edit Cover') {
      if (item === 'Camera') {
        const imageRes = await handleCameraPress();
        if (imageRes) {
          setCoverImage(imageRes);
        }
      }
      if (item === 'Gallery') {
        const imageRes = await handlePress();
        if (imageRes) {
          setCoverImage(imageRes);
        }
      }
    }
    if (imageType === 'Edit Profile') {
      if (item === 'Camera') {
        const imageRes = await handleCameraPress();
        if (imageRes) {
          setProfileImage(imageRes);
        }
      }
      if (item === 'Gallery') {
        const imageRes = await handlePress();
        if (imageRes) {
          setProfileImage(imageRes);
        }
      }
    }
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
        {optionModal && (
          <PictureOptions onCancel={handleChange} onSelect={onSelect} />
        )}
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
