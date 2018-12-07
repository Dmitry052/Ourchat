import React from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-elements";
import style from "./style";

class Welcome extends React.Component {
  render() {
    return (
      <View style={style.main}>
        <View style={style.logo}>
          <Image source={require("./../../../img/logo.png")} />
        </View>

        <View style={style.code}>
          <Button
            large
            fontSize={36}
            buttonStyle={style.btn}
            title="Start"
            titleStyle={{
              fontSize: 26
            }}
            icon={{ name: "fingerprint" }}
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}

export default Welcome;
