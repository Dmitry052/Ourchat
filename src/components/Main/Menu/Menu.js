import React from "react";
import { View, Text, Image, Animated } from "react-native";
import { Button } from "react-native-elements";
import style from "./style";

class Menu extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 400 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{ ...this.props.style, ...style.main, opacity: fadeAnim }}
      >
        <View style={style.closeMenu}>
          <Button
            title="Close"
            icon={{ name: "times", type: "font-awesome" }}
            buttonStyle={{}}
            onPress={this.props.handleOpenMenu}
          />
        </View>
      </Animated.View>
    );
  }
}

export default Menu;
