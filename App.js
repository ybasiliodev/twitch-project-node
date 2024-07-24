import React from 'react';
import { Button, Text, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import discoverScreen from './screens/discover'
import followingScreen from './screens/following'
import searchScreen from './screens/search'
import { Icon } from 'react-native-elements';
import Header from "./components/header";

const config = Platform.select({
 web: { headerMode: 'screen' },
 header: (
  <Header />
),
});

const DiscoverStack = createStackNavigator(
 {
   Discover: discoverScreen,
   Following: followingScreen,
   Search: searchScreen
 },
 config
);

const FollowingStack = createStackNavigator(
  {
    Following: followingScreen,
  },
  config
 );

 const SearchStack = createStackNavigator(
  {
    Search: searchScreen
  },
  config
 );

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Descubra',
  tabBarIcon: ({ focused }) => (
  <Ionicons
    focused={focused}
    size = {26}
    color={focused ? "#6441a4" : "gray"}
    name={ "md-compass" }
  />
 ),
};

FollowingStack.navigationOptions = {
  tabBarLabel: 'Seguindo',
  tabBarIcon: ({ focused }) => (
  <Ionicons
    focused={focused}
    size = {26}
    color={focused ? "#6441a4" : "gray"}
    name={ focused ? "md-heart" : "md-heart-empty"}
  />
  ),
  header: {
    visible: false,
  }
 };

 SearchStack.navigationOptions = {
  tabBarLabel: 'Procurar',
  tabBarIcon: ({ focused }) => (
    <Icon
      focused={focused}
      size={26}
      color={focused ? "#6441a4" : "gray"}
      name="content-copy"
    />
  ),
  header: {
    visible: false,
  }
 };

const tabNavigator = createBottomTabNavigator(
  {  
  FollowingStack,
  DiscoverStack,
  SearchStack
  },
  {
    initialRouteName: "DiscoverStack",
    tabBarOptions: {
      activeTintColor: "#6441a4",
      style: {
        backgroundColor: "white",
        elevation: 5
      }
    }
  }
);

const Switch = createSwitchNavigator({
 Main: tabNavigator
})

export default createAppContainer(Switch);
