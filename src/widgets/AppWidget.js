import React from "react";
import { Text, View, ScrollView } from "react-native";

const AppWidget = () => (
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

export default AppWidget;
