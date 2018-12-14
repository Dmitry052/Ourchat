import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { setActiveList } from "./../../../actions/main";
import style from "./style";

class BottomTabBarComponent extends React.Component {
  handleSetUsers = () => {
    this.props.setActiveList("Users");
    this.props.navigation.navigate("Users");
  };

  handleSetChats = () => {
    this.props.setActiveList("Chats");
    this.props.navigation.navigate("Chats");
  };

  handleSetProfile = () => {
    this.props.setActiveList("Profile");
    this.props.navigation.navigate("Profile");
  };

  render() {
    const { activeList } = this.props;

    return (
      <View style={{ flex: 0, flexDirection: "row" }}>
        <Button
          containerStyle={style.containerStyle}
          buttonStyle={
            activeList === "Users"
              ? {
                  ...style.buttonStyle,
                  ...style.activeButton
                }
              : style.buttonStyle
          }
          titleStyle={
            activeList === "Users"
              ? {
                  ...style.titleStyle,
                  ...style.activeTitle
                }
              : style.titleStyle
          }
          title="users"
          icon={{
            name: "address-book",
            type: "font-awesome",
            color: activeList === "Users" ? "white" : "black"
          }}
          onPress={this.handleSetUsers}
        />
        <Button
          containerStyle={style.containerStyle}
          buttonStyle={
            activeList === "Chats"
              ? {
                  ...style.buttonStyle,
                  ...style.activeButton
                }
              : style.buttonStyle
          }
          titleStyle={
            activeList === "Chats"
              ? {
                  ...style.titleStyle,
                  ...style.activeTitle
                }
              : style.titleStyle
          }
          title="chats"
          icon={{
            name: "comment",
            type: "font-awesome",
            color: activeList === "Chats" ? "white" : "black"
          }}
          onPress={this.handleSetChats}
        />
        <Button
          containerStyle={style.containerStyle}
          buttonStyle={
            activeList === "Profile"
              ? {
                  ...style.buttonStyle,
                  ...style.activeButton
                }
              : style.buttonStyle
          }
          titleStyle={
            activeList === "Profile"
              ? {
                  ...style.titleStyle,
                  ...style.activeTitle
                }
              : style.titleStyle
          }
          title="settings"
          icon={{
            name: "cog",
            type: "font-awesome",
            color: activeList === "Profile" ? "white" : "black"
          }}
          onPress={this.handleSetProfile}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  activeList: state.main.activeList
});

export default connect(
  mapStateToProps,
  { setActiveList }
)(BottomTabBarComponent);
