import React from "react";
import { AppRegistry, Platform, Text, View, ScrollView } from "react-native";
import AppWidget from "./src/widgets/AppWidget";

const TodayWidget = () => <AppWidget />;

if (Platform.OS === "ios") {
  AppRegistry.registerComponent("AITodayWidget", () => TodayWidget);
}
