import React from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

class AppWidget extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24 }}>
          {this.props.activeList}
        </Text>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  activeList: state.main.activeList
});

export default connect(
  mapStateToProps,
  {}
)(AppWidget);
