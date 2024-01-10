import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentSignIn from '../screens/auth/studentAuth/StudentSignIn/StudentSignIn';
import GetStarted from '../screens/auth/studentAuth/GetStarted';
import StudentRegistration from '../screens/auth/studentAuth/stuedentRegistration';
import InstructerSignIn from '../screens/auth/instructerAuth/instructerSignIn';
import GetStartedwithInstructer from '../screens/auth/instructerAuth/Getstarted';
import InstructerRegistration from '../screens/auth/instructerAuth/instructorReg';


const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'StudentSignIn'}
        component={StudentSignIn}
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
        name={'StudentRegistration'}
        component={StudentRegistration}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'InstructerSignIn'}
        component={InstructerSignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={'GetStartedwithInstructer'}
        component={GetStartedwithInstructer}
        options={{
          headerShown: false,
        }}
      />
       <AuthStack.Screen
        name={'InstructerRegistration'}
        component={InstructerRegistration}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
