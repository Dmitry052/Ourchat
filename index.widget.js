import React from "react";
import { AppRegistry, Platform, Text, View } from "react-native";

const TodayWidget = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text style={{ color: "#fff", fontSize: 24 }}>Hello Today Widget!</Text>
  </View>
);

if (Platform.OS === "ios") {
  AppRegistry.registerComponent("AITodayWidget", () => TodayWidget);
}
