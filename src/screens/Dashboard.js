/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Image, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../theme/Colors';
const Dashboard = () => {
  const [user, setUser] = useState('');
  const [image, setImage] = useState(
    'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const retrieveUserInfo = async () => {
      try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString !== null) {
          const userInfo = JSON.parse(userInfoString);
          // Here, you can use the retrieved userInfo as needed
          setUser(userInfo);
          if (user.photoURL) {
            setImage(user.photoURL);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log('Error retrieving user info:', error);
      }
    };
    retrieveUserInfo();
    return () => {
      if (loading) {
        <SafeAreaView>
          <ActivityIndicator size={'large'} color={colors.Primary} />
        </SafeAreaView>;
      }
    };
  }, [loading]);
  return (
    !loading && (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{color: 'black'}}>{user.displayName}</Text>
        <Text style={{color: 'black'}}>{user.email}</Text>
        <Image source={{uri: image}} style={{width: 100, height: 100}} />
      </SafeAreaView>
    )
  );
};

export default Dashboard;
