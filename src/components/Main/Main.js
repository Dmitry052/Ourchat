import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import style from "./style";

import Menu from "./Menu/Menu";
import Settings from "./Settings/Settings";
import Header from "./Header/Header";
import Users from "./Users/Users";
import Chats from "./Chats/Chats";
import {
  setActiveList,
  switchShowMenu,
  switchShowSettings
} from "./../../actions/main";

class Main extends React.Component {
  handleSwitchUsers = () => {
    this.props.setActiveList("users");
  };

  handleSwitchChats = () => {
    this.props.setActiveList("chats");
  };

  handleOpenMenu = () => {
    // this.props.navigation.navigate("Menu");

    this.props.switchShowMenu(!this.props.showMenu);
  };
  handleOpenSettings = () => {
    // this.props.navigation.navigate("Settings");
    this.props.switchShowSettings(!this.props.showSettings);
  };

  handleNavigateToChat = () => {
    this.props.navigation.navigate("Chat");
  };

  render() {
    const activeList = this.props.activeList === "users";
    const { showMenu, showSettings } = this.props;

    return (
      <View style={style.main}>
        <Header
          handleOpenMenu={this.handleOpenMenu}
          handleOpenSettings={this.handleOpenSettings}
        />

        {showMenu ? <Menu handleOpenMenu={this.handleOpenMenu} /> : null}

        {showSettings ? (
          <Settings handleOpenSettings={this.handleOpenSettings} />
        ) : null}

        <View style={style.switcher}>
          <View style={style.switchContainer}>
            <Button
              title="Users"
              icon={{ name: "address-book", type: "font-awesome" }}
              buttonStyle={
                activeList ? style.switchUsersActive : style.switchUsers
              }
              onPress={this.handleSwitchUsers}
            />
          </View>

          <View style={style.switchContainer}>
            <Button
              title="Chats"
              icon={{ name: "comment", type: "font-awesome" }}
              buttonStyle={
                !activeList ? style.switchUsersChatsActive : style.switchChats
              }
              onPress={this.handleSwitchChats}
            />
          </View>
        </View>

        {activeList ? (
          <Users users={this.props.users} onPress={this.handleNavigateToChat} />
        ) : (
          <Chats chats={this.props.chats} onPress={this.handleNavigateToChat} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  activeList: state.main.activeList,
  users: state.main.users,
  chats: state.main.chats,
  showMenu: state.main.showMenu,
  showSettings: state.main.showSettings
});

export default connect(
  mapStateToProps,
  { setActiveList, switchShowMenu, switchShowSettings }
)(Main);
