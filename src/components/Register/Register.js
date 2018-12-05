import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import style from "./style";

class Register extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={style.main}>
        <Text>Register</Text>
        <Button
          title="Go to Welcome"
          onPress={() => this.props.navigation.navigate("Welcome")}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(Register);
