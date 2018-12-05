import React from "react";
import { View, Text, Button } from "react-native";
import style from "./style";

class Welcome extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null
    };
  };

  render() {
    return (
      <View style={style.main}>
        <Text>Welcome</Text>
        <Button
          title="Go to Register"
          onPress={() => this.props.navigation.navigate("Register")}
        />
      </View>
    );
  }
}

export default Welcome;
