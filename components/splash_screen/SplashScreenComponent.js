import React from "react";
import { Image, TouchableHighlight } from "react-native";
import styles from "../splash_screen/styles";

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() => this.props.navigation.navigate("MainMenu")}
      >
        <Image style={styles.img} source={require("../../images/splash.png")} />
      </TouchableHighlight>
    );
  }
}
