import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    // flexDirection: "column",
    left: 0,
    right: 0,
    backgroundColor: "#e5e5e5f9",
    zIndex: 1
  },
  closeSettings: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    borderRadius: 0,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 4
  }
});
