import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { View, Text, Button } from "react-native";
import Start from "./Start/Start";
import Welcome from "./Welcome/Welcome";
import Register from "./Register/Register";

const AppNavigator = createStackNavigator({
  Start: {
    screen: Start
  },
  Welcome: {
    screen: Welcome
  },
  Register: {
    screen: Register
  }
});

export default createAppContainer(AppNavigator);
