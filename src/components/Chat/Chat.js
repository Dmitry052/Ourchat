import React from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import style from "./style";

import { setTextMessage } from "./../../actions/chat";

class Chat extends React.Component {
  handleSetMessage = value => {
    this.props.setTextMessage(value);
  };

  // Custom key for FlatList
  keyExtractor = item => `id${item.id}`;

  render() {
    return (
      <View style={style.main}>
        <View style={style.messages}>
          <FlatList
            inverted
            data={this.props.dataChat}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <View
                style={
                  item.type === "i"
                    ? {
                        ...style.containerChatText,
                        ...style.rightText
                      }
                    : style.containerChatText
                }
              >
                <View
                  style={
                    item.type === "i"
                      ? { ...style.locationChatText, ...style.rightColor }
                      : style.locationChatText
                  }
                >
                  <Text
                    style={
                      item.type === "i"
                        ? { ...style.chattext, ...style.rightChattext }
                        : style.chattext
                    }
                  >{`${item.message}`}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={style.inputBlock}>
          <TextInput
            multiline
            style={style.inputMessage}
            placeholder="input your message"
            onChangeText={this.handleSetMessage}
            value={this.props.inputMessage}
          />

          <Button
            title=""
            buttonStyle={style.btn}
            containerStyle={style.btnContainer}
            icon={{ name: "paper-plane", type: "font-awesome" }}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dataChat: state.chat.dataChat,
  inputMessage: state.chat.inputMessage
});

export default connect(
  mapStateToProps,
  { setTextMessage }
)(Chat);
