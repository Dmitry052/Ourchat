import React from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./style";
import ListElement from "./../../common/ListElement/ListElement";

class Users extends React.Component {
  render() {
    const { users, children, onPress } = this.props;

    return (
      <View style={style.main}>
        <ScrollView>
          {users.map(user => (
            <ListElement
              key={`user-${user.id}`}
              photo={user.photo}
              onPress={onPress}
            >
              <View style={style.info}>
                <View style={style.titleBlock}>
                  <Text style={style.title}>{`First name:`}</Text>
                  <Text style={style.title}>{`Last name:`}</Text>
                  <Text style={style.title}>{`Phone:`}</Text>
                </View>

                <View style={style.valueBlock}>
                  <Text style={style.text}>{user.firstname}</Text>
                  <Text style={style.text}>{user.lastname}</Text>
                  <Text style={style.text}>{user.phone}</Text>
                </View>
              </View>
            </ListElement>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Users;
