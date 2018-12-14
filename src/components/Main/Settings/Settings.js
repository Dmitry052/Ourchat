import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-elements";
import Input from "./../../common/Input/Input";
import style from "./style";

class Settings extends React.Component {
  render() {
    return (
      <View style={style.main}>
        {/* TODO: */}
        {/* Photo image */}
        <Image
          style={style.photo}
          source={require("./../../../../img/photo.png")}
        />
        {/* Phone number input */}
        <Input
          title="Phone"
          placeholder="+79607770000"
          value=""
          onChangeText={() => {}}
        />

        <Input
          title="Login"
          placeholder="input login"
          value=""
          onChangeText={() => {}}
        />

        <Input
          title="Chat name"
          placeholder="input chatname"
          value=""
          onChangeText={() => {}}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Button
            title="Logout"
            buttonStyle={{
              width: 150,
              height: 50
            }}
            icon={{ name: "sign-out", type: "font-awesome", color: "white" }}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default Settings;
