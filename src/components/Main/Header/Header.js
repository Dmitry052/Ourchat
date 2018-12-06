import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import style from "./style";

class Header extends React.Component {
  render() {
    return (
      <View style={style.main}>
        <View style={style.menu}>
          <Button
            title=""
            icon={{ name: "align-justify", type: "font-awesome" }}
            buttonStyle={style.menuBtn}
            onPress={() => {}}
          />
        </View>

        <View style={style.logo}>
          <Image
            style={style.logoimg}
            source={require("./../../../../img/logo.png")}
          />
        </View>

        <View style={style.setting}>
          <Button
            title=""
            icon={{ name: "cog", type: "font-awesome" }}
            buttonStyle={style.settingBtn}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default Header;
