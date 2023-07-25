import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Account from '../screens/Account';
import Dashboard from '../screens/Dashboard';
import Feed from '../screens/feed/Feed';

import Services from '../screens/Services';
import Colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import Fonts from '../theme/Fonts';

import Images from '../utils/Images';
import TestIcon from '../assets/svgs/Group 13';

const FeedStack = createNativeStackNavigator();
const FeedStackScreens = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen
      name={'Feed'}
      component={Feed}
      options={{headerShown: false}}
    />
    <FeedStack.Screen
      name={'Dashboard'}
      component={Dashboard}
      options={{headerShown: false}}
    />
  </FeedStack.Navigator>
);

const OpportunityStack = createNativeStackNavigator();
const OpportunityStackScreens = () => (
  <OpportunityStack.Navigator>
    <OpportunityStack.Screen
      name={'Account'}
      component={Account}
      options={{
        headerShown: false,
      }}
    />
  </OpportunityStack.Navigator>
);

const ExploreStack = createNativeStackNavigator();
const ExploreStackScreens = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      name={'Services'}
      component={Services}
      options={{
        headerShown: false,
      }}
    />
  </ExploreStack.Navigator>
);
const EventsStack = createNativeStackNavigator();
const EventsStackScreens = () => (
  <EventsStack.Navigator>
    <EventsStack.Screen
      name={'Dashboard'}
      component={Dashboard}
      options={{headerShown: false}}
    />
  </EventsStack.Navigator>
);
const ProfileStack = createNativeStackNavigator();
const ProfileStackScreens = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name={'Dashboard'}
      component={Dashboard}
      options={{headerShown: false}}
    />
  </ProfileStack.Navigator>
);
function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName == 'Announcements' ||
    routeName == 'Announcement' ||
    routeName == 'PostBooking' ||
    routeName == 'BookDriverForDelivery' ||
    routeName == 'PostDelivery' ||
    routeName == 'SpecialBusinesses' ||
    routeName == 'VipOffers' ||
    routeName == 'SpecialOffers' ||
    routeName === 'ProductDetail' ||
    routeName == 'Businesses'
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
          height: dimensions.Height / 14,
          display: getTabBarVisibility(route),
        },
        tabBarLabelStyle: {
          fontFamily: Fonts.family.bold,
          fontSize: Fonts.size.font8,
        },
        tabBarActiveTintColor: Colors.Headings,
        tabBarInactiveTintColor: Colors.Headings,
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'FeedStack':
              if (focused) {
                return (
                  <View style={styles.iconBackground}>
                    <Images.FeedFocused />
                  </View>
                );
              } else {
                return (
                  <View style={styles.iconBackground}>
                    <Images.Feed />
                  </View>
                );
              }
              break;

            case 'OpportunityStack':
              if (focused) {
                return (
                  <View style={styles.iconBackground}>
                    <Images.OpportunityFocused />
                  </View>
                );
              } else {
                return (
                  <View style={styles.iconBackground}>
                    <Images.Opportunity />
                  </View>
                );
              }
              break;

            case 'ExploreStack':
              if (focused) {
                return (
                  <View style={styles.iconBackground}>
                    <Images.ExploreFocused />
                  </View>
                );
              } else {
                return (
                  <View style={styles.iconBackground}>
                    <Images.Explore />
                  </View>
                );
              }
              break;

            case 'EventsStack':
              if (focused) {
                return (
                  <View style={styles.iconBackground}>
                    <Images.EventsFocused />
                  </View>
                );
              } else {
                return (
                  <View style={styles.iconBackground}>
                    <Images.Events />
                  </View>
                );
              }
              break;

            case 'ProfileStack':
              if (focused) {
                return (
                  <View style={styles.iconBackground}>
                    <Images.ProfileFocused />
                  </View>
                );
              } else {
                return (
                  <View style={styles.iconBackground}>
                    <Images.Profile />
                  </View>
                );
              }
              break;
          }
        },
      })}>
      <Tabs.Screen
        name={'FeedStack'}
        options={{headerShown: false, tabBarLabel: 'Feed'}}
        component={FeedStackScreens}
      />
      <Tabs.Screen
        name={'OpportunityStack'}
        options={{headerShown: false, tabBarLabel: 'Opportunity'}}
        component={OpportunityStackScreens}
      />
      <Tabs.Screen
        name={'ExploreStack'}
        options={{headerShown: false, tabBarLabel: 'Explore'}}
        component={ExploreStackScreens}
      />
      <Tabs.Screen
        name={'EventsStack'}
        options={{headerShown: false, tabBarLabel: 'Events'}}
        component={EventsStackScreens}
      />
      <Tabs.Screen
        name={'ProfileStack'}
        options={{headerShown: false, tabBarLabel: 'Profile'}}
        component={ProfileStackScreens}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: Colors.White,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
