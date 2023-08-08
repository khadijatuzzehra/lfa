import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import RegisterContinue from '../screens/auth/RegisterContinue';
import GetStarted from '../screens/auth/GetStarted';
import DiscoverPeople from '../screens/auth/DiscoverPeople';

import OnBoarding from '../screens/OnBoarding';
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
        name={'RegisterContinue'}
        component={RegisterContinue}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'DiscoverPeople'}
        component={DiscoverPeople}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
