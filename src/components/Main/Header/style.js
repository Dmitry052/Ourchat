import { StyleSheet } from "react-native";

const colorNone = "#4eb96c00";

export default StyleSheet.create({
  main: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  logo: {
    marginTop: 3
  },
  logoimg: {
    width: 85,
    height: 85
  },
  // ***************************
  menu: {
    position: "absolute",
    left: 20
  },
  menuBtn: {
    backgroundColor: colorNone
  },
  // ***************************
  setting: {
    position: "absolute",
    right: 20
  },
  settingBtn: {
    backgroundColor: colorNone
  }
});
