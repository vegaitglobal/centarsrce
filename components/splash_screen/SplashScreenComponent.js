import React from "react";
import { Image, TouchableHighlight } from "react-native";
import styles from "../splash_screen/styles";

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.props.navigation.addListener("didFocus", _ => {
      setTimeout(() => this.props.navigation.navigate("MainMenu"), 1500);
    });
  }

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
