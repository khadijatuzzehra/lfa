import React from 'react';
import MainContainer from './MainContainer';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ApiProvider} from './src/context/api.context';
import store from './src/store/Store';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const registerDeviceForMessaging = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  AsyncStorage.setItem('FCMToken', token).then(() => {
    console.log('FCM Token: ', token);
  });
};

const requestPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  if (granted === 'granted') {
    console.log('You can post notifications');
  } else {
    console.log("You can't send notification :P");
  }
};

const App = () => {
  useEffect(() => {
    requestPermission();
    registerDeviceForMessaging();
  }, []);
  return (
    <ApiProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </ApiProvider>
  );
};

export default App;
