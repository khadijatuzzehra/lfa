import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import Colors from './src/theme/Colors';
import {LOGIN_SUCCESS} from './src/store/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const MainContainer = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: Colors.LightPrimary,
    },
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

  //   if (loading) {
  //     return (
  //       <SafeAreaView
  //         style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //         <ActivityIndicator size={'large'} color={Colors.Primary} />
  //       </SafeAreaView>
  //     );
  //   }
  return (
    <NavigationContainer theme={MyTheme}>
      {user ? <Navigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainContainer;
