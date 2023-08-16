/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const retrieveUserInfo = async () => {
      try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString !== null) {
          const userInfo = JSON.parse(userInfoString);
          // Here, you can use the retrieved userInfo as needed
          setUser(userInfo);
        }
      } catch (error) {
        console.log('Error retrieving user info:', error);
      }
    };
    retrieveUserInfo();
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>{user.displayName}</Text>
      <Text style={{color: 'black'}}>{user.email}</Text>
      <Image source={{uri: user.photoURL}} style={{width: 50, height: 50}} />
    </SafeAreaView>
  );
};

export default Dashboard;
