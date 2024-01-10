/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Colors from '../theme/colors/Colors';
import Dashboard from '../screens/app/guestSection/home';
import Notification from '../screens/app/guestSection/blog';
import Profile from '../screens/app/guestSection/profile';
import Instructor from '../screens/app/guestSection/instructor';
import Home from '../screens/app/guestSection/home';
import Blog from '../screens/app/guestSection/blog';
// import Account from '../screens/app/guestSection/account';

const DashboardStack = createNativeStackNavigator();
const HomeStackScreens = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={'Home'}
      component={Home}
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
const BlogStackScreen = () => (
  <BlogStack.Navigator>
    <BlogStack.Screen
      name={'Blog'}
      component={Blog}
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
  </ProfileStack.Navigator>
);


function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === 'Dashboard' || routeName === 'Dashboard') {
    return 'none';
  }

  return 'flex';
}

const Tabs = createBottomTabNavigator();
export default () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {display: getTabBarVisibility(route),backgroundColor:'#233465'},
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'lightgray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent = Feather;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Instructor':
              iconName = 'user';
              break;
              case 'Blog':
              iconName = 'blog';
              break;
              case 'Profile':
                iconName = 'profile';
                break;
          }
          return (
            <IconComponent
              name={iconName}
              size={20}
              color={focused ? Colors.Primary : Colors.LightSecondary}
            />
          );
        },
      })}>
      <Tabs.Screen
        name={'Home'}
        options={{headerShown: false, tabBarLabel: 'Home'}}
        component={Home}
      />
      <Tabs.Screen
        name={'Instructor'}
        options={{headerShown: false, tabBarLabel: 'Instructor'}}
        component={Instructor}
      />
      <Tabs.Screen
        name={'Blog'}
        options={{headerShown: false, tabBarLabel: 'Blog'}}
        component={Blog}
      />
      
      <Tabs.Screen
        name={'ProfileStack'}
        options={{headerShown: false, tabBarLabel: 'Profile'}}
        component={Profile}
      />
    </Tabs.Navigator>
  );
};
