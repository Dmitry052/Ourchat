import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { View, Text, Button } from "react-native";
import Start from "./Start/Start";
import Welcome from "./Welcome/Welcome";
import Register from "./Register/Register";
import Main from "./Main/Main";
import Chat from "./Chat/Chat";

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
  Main: {
    screen: Main,
    navigationOptions: {
      headerLeft: null,
      // switch off swipe
      gesturesEnabled: false
    }
  },
  Chat: {
    screen: Chat
  }
});

export default createAppContainer(AppNavigator);
