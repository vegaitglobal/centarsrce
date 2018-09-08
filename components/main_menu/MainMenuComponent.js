import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Footer from "../footer/Footer";
import NavigationButtonList from "../NavigationButtonList";

export default class MainMenu extends React.Component {
  static navigationOptions = {
    title: "PODRŠKA"
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: "100%" }}
            source={require("../../images/homePage.png")}
          />
          <View>
            <NavigationButtonList
              buttons={[
                {
                  label: "Razmišljaš o samoubistvu?",
                  onPress: () => navigation.navigate("ThinkingAbout")
                },
                {
                  label: "Kako pomoći?",
                  onPress: () => navigation.navigate("Placeholder")
                },
                {
                  label: "Značajne informacije",
                  onPress: () => navigation.navigate("Placeholder")
                },
                {
                  label: "O udruženju i o aplikaciji",
                  onPress: () => navigation.navigate("Placeholder")
                }
              ]}
            />
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});
