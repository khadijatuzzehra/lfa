import React from 'react';
import Login from '../sreens/auth/Login';
import Register from '../sreens/auth/Register';
import Otp from '../sreens/auth/Otp';
import ProfileUpdate from '../sreens/auth/ProfileUpdate';
import GetStarted from '../sreens/auth/GetStarted';

import OnBoarding from '../sreens/OnBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'OnBoarding'}
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'GetStarted'}
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'Register'}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'Otp'}
        component={Otp}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'ProfileUpdate'}
        component={ProfileUpdate}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
