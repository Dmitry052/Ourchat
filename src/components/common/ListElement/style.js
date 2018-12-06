import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    height: 80,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#e5e5e5",
    marginTop: 3,
    marginBottom: 3
  },
  //   *************
  logo: {
    flex: 2,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  logoimg: {
    width: 70,
    height: 70
  },
  //   *************
  info: {
    flex: 6,
    justifyContent: "center",
    // alignItems: "center"
  },
  //   *************

  start: {
    flex: 1,
    flexDirection: "column"
    // backgroundColor: "blue"
  },
  startBtn: {
    height: 79,
    borderRadius: 0,
    backgroundColor: "#e5e5e53b"
  }
});
