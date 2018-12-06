import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { View, Text, Button } from "react-native";
import Start from "./Start/Start";
import Welcome from "./Welcome/Welcome";
import Register from "./Register/Register";
import Main from "./Main/Main";

const AppNavigator = createStackNavigator({
  Start: {
    screen: Start
  },
  Welcome: {
    screen: Welcome
  },
  Register: {
    screen: Register
  },
  Main: {
    screen: Main
  }
});

export default createAppContainer(AppNavigator);
