import { StyleSheet } from "react-native";

const colorNone = "#4eb96c00";

export default StyleSheet.create({
  containerStyle: {
    flexBasis: "33.333%"
  },
  buttonStyle: {
    borderRadius: 0,
    borderTopWidth: 0.5,
    borderTopColor: "#e5e5e5",
    backgroundColor: "#fff"
  },
  titleStyle: { color: "#2089dc", fontSize: 12 },
  activeButton: { backgroundColor: "#2089dc" },
  activeTitle: { color: "#fff" },
  activeIcon: { color: "white" }
});
