import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import Start from "./Start/Start";
import Welcome from "./Welcome/Welcome";
import Register from "./Register/Register";
import Chat from "./Chat/Chat";

import BottomTabBarComponent from "./Main/BottomTabBarComponent/BottomTabBarComponent";
import Users from "./Main/Users/Users";
import Chats from "./Main/Chats/Chats";
import Profile from "./Main/Settings/Settings";

const BottomTabBar = createBottomTabNavigator(
  { Users, Chats, Profile },
  {
    tabBarComponent: BottomTabBarComponent,
    tabBarPosition: "bottom"
  }
);

const AppNavigator = createStackNavigator({
  Start: {
    screen: Start
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: { headerLeft: null, gesturesEnabled: false }
  },
  Register: {
    screen: Register,
    navigationOptions: { headerLeft: null, gesturesEnabled: false }
  },
  Chat: {
    screen: Chat
  },
  Main: {
    screen: BottomTabBar,
    navigationOptions: {
      headerLeft: null,
      // switch off swipe from IOS
      gesturesEnabled: false
    }
  }
});

export default createAppContainer(AppNavigator);
