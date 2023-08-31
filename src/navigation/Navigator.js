/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Account from '../screens/Account';
import Dashboard from '../screens/Dashboard';
import Feed from '../screens/feed/Feed';
//profile stack
import Profile from '../screens/profile/Main/Profile';
import PersonalBio from '../screens/profile/PersonalBio/PersonalBio';
import Experiences from '../screens/profile/Experiences/Experiences';
import EditExperiences from '../screens/profile/Experiences/EditExperiences';
import Education from '../screens/profile/Education/Education';
import EditEducation from '../screens/profile/Education/EditEducation';
import Projects from '../screens/profile/Projects/Projects';
import EditProjects from '../screens/profile/Projects/EditProjects';
import Recommendations from '../screens/profile/Recommendations/Recommendations';
import Language from '../screens/profile/Language/Language';
//Events Stack
import Events from '../screens/events/Events';
import EventDetails from '../screens/events/EventDetails/EventDetails';
import Services from '../screens/Services';
import Colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import Fonts from '../theme/Fonts';

import Images from '../utils/Images';

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
      name={'Events'}
      component={Events}
      options={{headerShown: false}}
    />
    <EventsStack.Screen
      name={'EventDetails'}
      component={EventDetails}
      options={{headerShown: false}}
    />
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
      name={'Profile'}
      component={Profile}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'PersonalBio'}
      component={PersonalBio}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'Experiences'}
      component={Experiences}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={'Education'}
      component={Education}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'Projects'}
      component={Projects}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'Recommendations'}
      component={Recommendations}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'Language'}
      component={Language}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'EditEducation'}
      component={EditEducation}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'EditExperiences'}
      component={EditExperiences}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name={'EditProjects'}
      component={EditProjects}
      options={{headerShown: false}}
    />
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
    routeName === 'PersonalBio' ||
    routeName === 'Education' ||
    routeName === 'EditEducation' ||
    routeName === 'Experiences' ||
    routeName === 'EditExperiences' ||
    routeName === 'Projects' ||
    routeName === 'EditProjects' ||
    routeName === 'Recommendations' ||
    routeName === 'Language' ||
    routeName === 'EventDetails' ||
    routeName === 'Businesses'
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
          height: dimensions.Height / 15,
          display: getTabBarVisibility(route),
          paddingVertical: 10,
          alignItems: 'center',
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: Fonts.family.medium,
          fontSize: Fonts.size.font10,
          margin: 0,
        },
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.BlueGray,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = route.name;
          let focusedIconName = route.name + 'Focused';
          const IconComponent = focused
            ? Images[focusedIconName]
            : Images[iconName];
          return (
            <View>
              <IconComponent />
            </View>
          );
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
