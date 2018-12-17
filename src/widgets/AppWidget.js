import React from "react";
import { Text, View, Image } from "react-native";
import { setExpandable } from "react-native-today-widget";
import style from "./style";

class AppWidget extends React.Component {
  render() {
    const isExpandable = true;
    const maxHeight = 200;

    setExpandable(isExpandable, maxHeight);

    const onLayout = event => {
      const height = event.nativeEvent.layout.height;
      if (height <= 110) {
        console.log("widget is in compact mode");
      } else if (height > 110) {
        console.log("widget is in expanded mode");
      }
    };
    return (
      <View
        onLayout={onLayout}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            width: "33.333%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 5 }}>column_1</Text>
        </View>

        <View
          style={{
            backgroundColor: "red",
            width: "33.333%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 5 }}>column_2</Text>
        </View>

        <View
          style={{
            backgroundColor: "yellow",
            width: "33.333%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 5 }}>column_3</Text>
        </View>
      </View>
    );
  }
}

export default AppWidget;
