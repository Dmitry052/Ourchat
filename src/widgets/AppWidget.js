import React from "react";
import { Text, View, Image, Button } from "react-native";
import { setExpandable } from "react-native-today-widget";
import * as Keychain from "react-native-keychain";
import style from "./style";

class AppWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "none"
    };
  }

  async componentDidMount() {
    try {
      const value = Keychain.getInternetCredentials("test");

      value
        .then(res => {
          this.setState({
            value: res.username
          });
        })
        .catch(err => {
          this.setState({
            value: `${JSON.stringify(err)}`
          });
        });
    } catch (err) {
      this.setState({
        value: err.toString()
      });
    }
  }

  getKeyChain = async () => {};

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
            backgroundColor: "blue",
            width: "33.333%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 5 }}>column_1</Text>
        </View>

        <View
          style={{
            backgroundColor: "green",
            width: "33.333%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            {`Username from keychain -> '${this.state.value}'`}
          </Text>
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
