import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import style from "./style";

class ListElement extends React.Component {
  render() {
    const { photo, onPress } = this.props;

    return (
      <View style={style.main}>
        <View style={style.logo}>
          <Image
            style={style.logoimg}
            source={
              photo
                ? require("./../../../../img/me.png")
                : require("./../../../../img/photo.png")
            }
          />
        </View>

        <View style={style.info}>{this.props.children}</View>

        <View style={style.start}>
          <Button
            title=""
            icon={{ name: "paper-plane", type: "font-awesome" }}
            buttonStyle={style.startBtn}
            onPress={onPress}
          />
        </View>
      </View>
    );
  }
}

export default ListElement;
