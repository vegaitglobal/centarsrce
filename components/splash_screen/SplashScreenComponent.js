import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";


export default class SplashScreen extends React.Component {
  static navigationOptions = {
    title: "PODRŠKA"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("MainMenu")}
        >
          <Image source={require("../../images/splash.png")} />
        </TouchableHighlight>
      </View>
    );
  }
}
