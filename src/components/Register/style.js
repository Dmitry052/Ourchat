import { StyleSheet } from "react-native";
const titleInput = {
  fontSize: 19
};

const input = {
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#e5e5e5",
  width: 200,
  paddingLeft: 5,
  paddingBottom: 5,
  paddingTop: 5,
  fontSize: 20
};

const dataPosition = {
  alignItems: "center",
  justifyContent: "center"
};

export default StyleSheet.create({
  main: {
    flex: 1
  },
  // ***************************
  topImage: {
    width: 150,
    height: 150
  },
  // ***************************
  title: {
    marginTop: 10,
    alignItems: "center"
  },
  titleText: { fontSize: 40, letterSpacing: 2 },
  // ***************************
  phone: {
    flex: 1,
    // backgroundColor: "red",
    ...dataPosition
  },
  phoneTitle: {
    ...titleInput
  },
  phoneInput: {
    ...input
  },
  // ***************************
  code: {
    flex: 1,
    // backgroundColor: "green",
    ...dataPosition
  },
  codeTitle: {
    ...titleInput
  },
  codeInput: {
    ...input
  },
  // ***************************
  next: {
    flex: 2,
    // backgroundColor: "#e6e7e9",
    marginLeft: 15,
    marginRight: 15,

    justifyContent: "center"
  },
  btn: {
    height: 60,
    backgroundColor: "#62d1e2"
  }
});
