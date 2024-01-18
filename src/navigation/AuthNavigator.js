/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Colors from '../theme/colors/Colors';
import StudentSignIn from '../screens/auth/studentAuth/StudentSignIn/StudentSignIn';
import GetStarted from '../screens/auth/studentAuth/GetStarted';
import StudentRegistration from '../screens/auth/studentAuth/studentRegistration';
import InstructorSignIn from '../screens/auth/instructerAuth/instructerSignIn';
import GetStartedwithInstructer from '../screens/auth/instructerAuth/Getstarted';
import InstructorRegistration from '../screens/auth/instructerAuth/instructorReg';
import ProfileComplete from '../screens/auth/studentAuth/studentRegistration/ProfileComplete';
import InstructorProfileComplete from '../screens/auth/instructerAuth/instructorReg/ProfileComplete';
import Profile from '../screens/app/guestSection/profile';
import Instructor from '../screens/app/guestSection/instructor';
import Home from '../screens/app/guestSection/home';
import Blog from '../screens/app/guestSection/blog';
import BlogDetails from '../screens/app/guestSection/blogdetails';
import Courses from '../screens/app/guestSection/courses.js/index.js';
import CourseDetails from '../screens/app/guestSection/coursedetail.js/index';

const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={'Home'}
      component={Home}
      options={{headerShown: false}}
    />
     <HomeStack.Screen
      name={'Courses'}
      component={Courses}
      options={{headerShown: false}}
    />
     <HomeStack.Screen
      name={'CourseDetails'}
      component={CourseDetails}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);



const InstructorStack = createNativeStackNavigator();
const InstructorStackScreens = () => (
  <InstructorStack.Navigator>
    <InstructorStack.Screen
      name={'Instructor'}
      component={Instructor}
      options={{
        headerShown: false,
      }}
    />
  </InstructorStack.Navigator>
);

const BlogStack = createNativeStackNavigator();
const BlogStackScreens = () => (
  <BlogStack.Navigator>
    <BlogStack.Screen
      name={'Blog'}
      component={Blog}
      options={{
        headerShown: false,
      }}
    />
    <BlogStack.Screen
      name={'BlogDetails'}
      component={BlogDetails}
      options={{
        headerShown: false,
      }}
    />
  </BlogStack.Navigator>
);

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreens = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name={'Profile'}
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'StudentSignIn'}
      component={StudentSignIn}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'GetStarted'}
      component={GetStarted}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'StudentRegistration'}
      component={StudentRegistration}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'InstructorSignIn'}
      component={InstructorSignIn}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'GetStartedwithInstructer'}
      component={GetStartedwithInstructer}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'InstructorRegistration'}
      component={InstructorRegistration}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'ProfileComplete'}
      component={ProfileComplete}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'InstructorProfileComplete'}
      component={InstructorProfileComplete}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

function getTabBarVisibility(route) {                 // function for nav bar visibility
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName === 'StudentSignIn' ||
    routeName === 'StudentRegistration' ||
    routeName === 'ProfileComplete' ||
    routeName === 'InstructorRegistration' ||
    routeName === 'BlogDetails' ||
    routeName === 'CourseDetails' ||
    routeName === 'InstructorSignIn'
  ) {
    return 'none';
  }

  return 'flex';
}

const Tabs = createBottomTabNavigator();
export default () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          backgroundColor: '#233465',
        },
        tabBarActiveTintColor: Colors.White,
        tabBarInactiveTintColor: Colors.White,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent = Ionicons;
          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Instructors':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'Blogs':
              iconName = focused ? 'reader' : 'reader-outline';
              break;
            case 'Profiles':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }
          return (
            <IconComponent
              name={iconName}
              size={20}
              color={focused ? Colors.White : Colors.White}
            />
          );
        },
      })}>
      <Tabs.Screen
        name={'Dashboard'}
        options={{headerShown: false, tabBarLabel: 'Home'}}
        component={HomeStackScreens}
      />
      <Tabs.Screen
        name={'Instructors'}
        options={{headerShown: false, tabBarLabel: 'Instructor'}}
        component={InstructorStackScreens}
      />
      <Tabs.Screen
        name={'Blogs'}
        options={{headerShown: false, tabBarLabel: 'Blog'}}
        component={BlogStackScreens}
      />

      <Tabs.Screen
        name={'Profiles'}
        options={{headerShown: false, tabBarLabel: 'Account'}}
        component={ProfileStackScreens}
      />
    </Tabs.Navigator>
  );
};
