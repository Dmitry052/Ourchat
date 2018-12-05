import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";

class Start extends React.Component {
  componentDidMount() {
    // Request to API
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 2000);
  }

  render() {
    return (
      <View style={style.main}>
        <Image source={require("./../../../img/loading.png")} />
      </View>
    );
  }
}

export default Start;
