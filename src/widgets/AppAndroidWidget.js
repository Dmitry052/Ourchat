import { NativeModules } from "react-native";

const showResult = () => {
  NativeModules.ToastExample.show("Awesome", ToastExample.SHORT);
};

export default showResult;
