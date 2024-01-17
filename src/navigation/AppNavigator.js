/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Account from '../screens/app/account/Account';
import Dashboard from '../screens/app/dashboard/Dashboard';
import Services from '../screens/app/services/Services';
import Colors from '../theme/colors/Colors';
import Notification from '../screens/app/guestSection/blog';


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

const ServicesStack = createNativeStackNavigator();
const ServicesStackScreens = () => (
  <ServicesStack.Navigator>
    <ServicesStack.Screen
      name={'Services'}
      component={Services}
      options={{
        headerShown: false,
      }}
    />
  </ServicesStack.Navigator>
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
        tabBarStyle: {display: getTabBarVisibility(route)},
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.LightSecondary,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let IconComponent = Feather;
          switch (route.name) {
            case 'DashboardStack':
              iconName = 'home';
              break;

            case 'ServicesStack':
              iconName = 'grid';
              break;

            case 'AccountStack':
              iconName = 'user';
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
        name={'DashboardStack'}
        options={{headerShown: false, tabBarLabel: 'Dashboard'}}
        component={DashboardStackScreens}
      />
      <Tabs.Screen
        name={'ServicesStack'}
        options={{headerShown: false, tabBarLabel: 'Services'}}
        component={ServicesStackScreens}
      />
      <Tabs.Screen
        name={'AccountStack'}
        options={{headerShown: false, tabBarLabel: 'Account'}}
        component={AccountStackScreens}
      />
    </Tabs.Navigator>
  );
};
