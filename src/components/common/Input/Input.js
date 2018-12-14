import React from "react";
import { View, Text, TextInput } from "react-native";
import style from "./style";

const Input = ({
  title = "",
  text = "",
  placeholder = "",
  onChangeText = () => {}
}) => (
  <View style={style.input}>
    <Text style={style.titleInput}>{title}</Text>
    <TextInput
      style={style.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={text}
    />
  </View>
);

export default Input;
