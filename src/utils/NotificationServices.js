import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

export const registerDeviceForMessaging = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log(token, 'device registered token');
  AsyncStorage.setItem('FCMToken', token).then(() => {
    console.log('FCM Token Stored');
  });
};

export const requestUserPermission = async () => {
  await messaging().requestPermission();
  const notificationPermissionStatus = await request(
    PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
  );
  if (notificationPermissionStatus === 'granted') {
    console.log('You can post notifications');
    getFcmToken();
  } else if (notificationPermissionStatus === 'blocked') {
    console.log('Notification permission denied. Guiding to app settings.');
  } else {
    console.log('Permission not determined.');
  }
};

export const notificationListener = () => {
  messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('FCMToken');
  if (!fcmToken) {
    try {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
