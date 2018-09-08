import React from "react";
import { Button, Text, View } from "react-native";
import Footer from "./footer/Footer";

export default class MainMenu extends React.Component {
  static navigationOptions = {
    title: "PODRŠKA"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Page with buttons</Text>
        <Button
          title="Razmišljaš o samoubistvu?"
          onPress={() => this.props.navigation.navigate("ThinkingAbout")}
        />
        <Footer />
      </View>
    );
  }
}
