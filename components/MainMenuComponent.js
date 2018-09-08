import React from "react";
import { Image, ScrollView, View } from "react-native";
import Footer from "./footer/Footer";
import NavigationButton from "./NavigationButton";

const styles = {
  image: {
    width: "100%"
  },
  container: {
    backgroundColor: "#b298c1",
    display: "flex"
  }
};

export default class MainMenu extends React.Component {
  static navigationOptions = {
    title: "PODRŠKA"
  };

  render() {
    return (
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../images/homePage.png")}
        />
        <View style={styles.container}>
          <NavigationButton
            label="Razmišljaš o samoubistvu?"
            onPress={() => this.props.navigation.navigate("ThinkingAbout")}
          />
          <NavigationButton
            label="Kako pomoći?"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="Značajne informacije"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="O udruženju i o aplikaciji"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <Footer />
        </View>
      </ScrollView>
    );
  }
}
