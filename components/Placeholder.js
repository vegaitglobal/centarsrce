import React from "react";
import { Text } from "react-native";

export default class Placeholder extends React.Component {
  static navigationOptions = {
    title: "TODO"
  };

  render() {
    return <Text>hello, world</Text>;
  }
}
