import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Image, LogBox} from 'react-native';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {
  HTWrapper,
  HTAlertWithIcon,
  HTButton,
  HTText,
  HTDropdown,
  HTPictureOption,
} from '../../../components';
import {Images} from '../../../utils/media';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../theme';
import {getDeviceInformation} from '../../../services/notifications/FirebaseNotifications';
import messaging from '@react-native-firebase/messaging';
import {PERMISSIONS, request} from 'react-native-permissions';
import {
  selectFromGallery,
  uploadFromCamera,
} from '../../../services/media_upload';
LogBox.ignoreAllLogs();
console.warn = () => {};

const Dashboard = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [pictureModal, setPictureModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
  const getDeviceInfo = async () => {
    const {fcmToken, deviceType, deviceName} = await getDeviceInformation();
    console.log(fcmToken, deviceType, deviceName);
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    }
    getDeviceInfo();

    messaging().onNotificationOpenedApp(async remoteMessage => {
      const notificationData = JSON.stringify(remoteMessage);
      if (notificationData) {
        navigation.navigate('Notification');
      }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification app to open from quit state:',
            remoteMessage,
          );
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('background', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      let notify = JSON.stringify(remoteMessage);
      console.log('Onscreen ', notify);
      setVisible(true);
      setAlertTitle(remoteMessage.notification.title);
      setAlertDescription(remoteMessage.notification.body);
    });

    return () => {
      unsubscribe;
    };
  }, [navigation]);
  const handleSelect = selectedValue => {
    setSelectedOption(selectedValue);
  };

  const onCancel = () => {
    setVisible(false);
  };
  const societiesFilter = ['All', 'Joined', 'Not Joined'];
  const handlePictureUpload = async pictureOption => {
    let picture = '';
    setPictureModal(false);
    if (pictureOption === 'Camera') {
      picture = await uploadFromCamera();
    } else {
      picture = await selectFromGallery();
    }
    console.log(picture);
  };

  return (
    <HTWrapper translucent={false}>
      <Image source={Images.appImages.User} style={[GlobalStyles.roundLarge]} />
      <HTText text="Dashboard" />
      {/* <HTButton
        onClick={() => setVisible(true)}
        buttonType="border"
        text="Show Alert"
        borderColor={Colors.Primary}
        textColor={Colors.Primary}
        bold
        style={styles.gap}
      /> */}
      <HTButton
        onClick={() => setPictureModal(true)}
        buttonType="fill"
        text="Upload Picture"
        backgroundColor={Colors.Primary}
        textColor={Colors.White}
        bold
        style={styles.gap}
      />
      <HTButton
        onClick={() => setDropdownOpen(true)}
        buttonType="border"
        text={selectedOption}
        textColor={Colors.Primary}
        bold
        style={styles.gap}
      />
      <HTDropdown
        heading={'Please select an option'}
        items={societiesFilter}
        selectedValue={selectedOption}
        onSelect={handleSelect}
        open={dropdownOpen}
        onCancel={() => setDropdownOpen(false)}
      />
      <HTAlertWithIcon
        heading={alertTitle}
        isVisible={visible}
        description={alertDescription}
        iconName="checkmark-done-outline"
        iconColor={Colors.Primary}
        onCancel={onCancel}
        button={'Thanks'}
      />
      <HTPictureOption
        isVisible={pictureModal}
        onCancel={() => setPictureModal(false)}
        onSelect={handlePictureUpload}
      />
      {/* <HTBottomSheet
        isVisible={pictureModal}
        onCancel={() => setPictureModal(false)}
        backgroundColor={Colors.White}
      /> */}
    </HTWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: Colors.Gray,
  },
  gap: {
    margin: 10,
  },
});

export default Dashboard;
