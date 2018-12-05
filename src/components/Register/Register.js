import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import style from "./style";

class Register extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2: ""
    };
  }

  render() {
    console.log(this.state);
    return (
      <View style={style.main}>
        <Image style={style.topImage} source={require("./../../../img/mess.png")} />
        <View style={style.title}>
          <Text style={style.titleText}>Registration</Text>
        </View>

        <View style={style.phone}>
          <Text style={style.phoneTitle}>Input your phone number</Text>
          <TextInput
            style={style.phoneInput}
            placeholder="+79607770000"
            onChangeText={text => this.setState({ text1: text })}
          />
        </View>

        <View style={style.code}>
          <Text style={style.codeTitle}>Security code</Text>
          <TextInput
            style={style.codeInput}
            placeholder="code"
            onChangeText={text => this.setState({ text2: text })}
          />
        </View>

        <View style={style.next}>
          <Button
            title="Next"
            buttonStyle={style.btn}
            onPress={() => this.props.navigation.navigate("Welcome")}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(Register);
