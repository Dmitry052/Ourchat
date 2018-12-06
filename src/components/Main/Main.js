import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import style from "./style";

import Header from "./Header/Header";
import Users from "./Users/Users";
import Chats from "./Chats/Chats";
import { setActiveList } from "./../../actions/main";

class Main extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null
    };
  };

  handleSwitchUsers = () => {
    this.props.setActiveList("users");
  };

  handleSwitchChats = () => {
    this.props.setActiveList("chats");
  };

  render() {
    const activeList = this.props.activeList === "users";
    return (
      <View style={style.main}>
        <Header />

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
          <Users users={this.props.users} />
        ) : (
          <Chats chats={this.props.chats} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  activeList: state.main.activeList,
  users: state.main.users,
  chats: state.main.chats
});

export default connect(
  mapStateToProps,
  { setActiveList }
)(Main);
