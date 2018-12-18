import React from "react";
import { View, Image, NativeModules } from "react-native";
import { Button, Text } from "react-native-elements";
import * as Keychain from "react-native-keychain";
import style from "./style";

class Welcome extends React.Component {
  async componentDidMount() {
    const username = "krench";
    const uuid = "ee878b05-54bd-46fb-931b-7ab844647ca4";
    // await Keychain.setInternetCredentials("test", username, uuid);
    console.log("Good");

    NativeModules.TestExample.show("sdfdsfdsfsdfsd", this.showResult)
  }

  showResult = async message => {
    console.log("message", message);
  };

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
