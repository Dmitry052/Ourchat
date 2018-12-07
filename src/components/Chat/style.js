import { StyleSheet } from "react-native";

const marginValue = 5;
const commonMargin = {
  marginLeft: marginValue,
  marginRight: marginValue,
  marginTop: marginValue,
  marginBottom: marginValue
};
const commonBorder = {
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderColor: "#e5e5e5"
};

export default StyleSheet.create({
  main: {
    flex: 1
    // alignItems: "flex-end"
  },
  messages: {
    flex: 10,
    ...commonMargin,
    ...commonBorder,
    backgroundColor: "#e5e5e55c",
    flexDirection: "row",
    alignItems: "flex-end",
    overflow: "scroll"
  },

  chattext: {
    // backgroundColor: "yellow",
    ...commonMargin
  },
  inputBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    // backgroundColor: "red",
    ...commonMargin,
    ...commonBorder
  },
  inputMessage: { flexBasis: "80%", paddingLeft: 5 },
  btnContainer: {
    flexBasis: "20%"
    //  backgroundColor: "cyan"
  },
  btn: { height: "100%" }
});
