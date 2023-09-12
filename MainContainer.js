/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_SUCCESS} from './src/store/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import colors from './src/theme/Colors';

const MainContainer = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: 'red',
    },
    flex: 1,
  };

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then(userInfo => {
      if (userInfo != null) {
        dispatch({type: LOGIN_SUCCESS, payload: JSON.parse(userInfo)});
      }
      SplashScreen.hide();
      setLoading(false);
    });
    return () => {};
  }, []);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.White,
        }}>
        <ActivityIndicator size={'large'} color={colors.Primary} />
      </SafeAreaView>
    );
  }
  return (
    <View style={{flex: 1}}>
      <NavigationContainer theme={MyTheme}>
        {user ? <Navigator /> : <AuthNavigator />}
      </NavigationContainer>
    </View>
  );
};

export default MainContainer;
