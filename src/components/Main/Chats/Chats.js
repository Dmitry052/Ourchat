import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Text as CustomText } from "react-native-elements";
import style from "./style";
import ListElement from "./../../common/ListElement/ListElement";

class Chats extends React.Component {
  render() {
    const { chats, onPress } = this.props;

    return (
      <View style={style.main}>
        <ScrollView>
          {chats.map(chat => (
            <ListElement
              key={`chat-${chat.id}`}
              chat={chat}
              photo={chat.photo}
              onPress={onPress}
            >
              <View style={style.data}>
                <View style={style.header}>
                  <Text style={style.headerTitle}>{chat.chatname}</Text>
                  <Text>{chat.datetime}</Text>
                </View>

                <View style={style.info}>
                  <View style={style.from}>
                    <Text>{chat.lastMessage.from}</Text>
                  </View>

                  <View style={style.text}>
                    <Text>{chat.lastMessage.message}</Text>
                  </View>
                </View>
              </View>
            </ListElement>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Chats;
