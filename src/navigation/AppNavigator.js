/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Account from '../screens/app/studentSection/account';
import Dashboard from '../screens/app/studentSection/dashboard';
import Colors from '../theme/colors/Colors';
import Notification from '../screens/app/studentSection/notification';
import Courses from '../screens/app/studentSection/courses';


const DashboardStack = createNativeStackNavigator();
const DashboardStackScreens = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name={'Dashboard'}
      component={Dashboard}
      options={{headerShown: false}}
    />
  </DashboardStack.Navigator>
);

const AccountStack = createNativeStackNavigator();
const AccountStackScreens = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen
      name={'Account'}
      component={Account}
      options={{
        headerShown: false,
      }}
    />
  </AccountStack.Navigator>
);

const NotificationStack = createNativeStackNavigator();
const NotificationStackScreens = () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen
      name={'Notification'}
      component={Notification}
      options={{
        headerShown: false,
      }}
    />
  </NotificationStack.Navigator>
);

const CoursesStack = createNativeStackNavigator();
const CoursesStackScreens = () => (
  <CoursesStack.Navigator>
    <CoursesStack.Screen
      name={'Courses'}
      component={Courses}
      options={{
        headerShown: false,
      }}
    />
  </CoursesStack.Navigator>
);

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === 'Announcements' || routeName === 'Announcement') {
    return 'none';
  }

  return 'flex';
}

const Tabs = createBottomTabNavigator();
export default () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({

        tabBarStyle: {display: getTabBarVisibility(route),
           backgroundColor: '#233465',
      },
        tabBarActiveTintColor: Colors.White,
        tabBarInactiveTintColor: Colors.White,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent = Feather;
          switch (route.name) {
            case 'DashboardStack':
              iconName = 'home';
              break;

            case 'CoursesStack':
              iconName = 'book-open';
              break;

            case 'NotificationStack':
                iconName = 'bell';
                break;

            case 'AccountStack':
              iconName = 'user';
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
        name={'DashboardStack'}
        options={{headerShown: false, tabBarLabel: 'Dashboard'}}
        component={DashboardStackScreens}
      />
      <Tabs.Screen
        name={'CoursesStack'}
        options={{headerShown: false, tabBarLabel: 'Courses'}}
        component={CoursesStackScreens}
      />

      <Tabs.Screen
        name={'NotificationStack'}
        options={{headerShown: false, tabBarLabel: 'Notification'}}
        component={NotificationStackScreens}
      />
      <Tabs.Screen
        name={'AccountStack'}
        options={{headerShown: false, tabBarLabel: 'Account'}}
        component={AccountStackScreens}
      />
    </Tabs.Navigator>
  );
};
