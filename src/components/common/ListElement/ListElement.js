import React from "react";
import { View, Text, Image, Animated } from "react-native";
import { Button } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import style from "./style";

class ListElement extends React.Component {
  handleDelete = () => {
    console.log(this.props.id);
  };

  render() {
    const { photo, onPress, id } = this.props;
    const swipeoutBtns = [
      {
        text: "Delete",
        backgroundColor: "red",
        color: "#fff",
        onPress: this.handleDelete
      }
    ];

    return (
      <Swipeout
        autoClose
        right={swipeoutBtns}
        backgroundColor="#fff"
        sensitivity={100}
      >
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
      </Swipeout>
    );
  }
}

export default ListElement;
