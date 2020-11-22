import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Footer from "../footer/Footer";
import NavigationButtonList from "../NavigationButtonList";

export default class MainMenu extends React.Component {
  static navigationOptions = {
    headerLeft: null,
    headerTitle: (
      <Image
        style={{ marginLeft: 20, width: 122, height: 35 }}
        source={require("../../images/logo.png")}
      />
    )
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
                  onPress: () => navigation.navigate("HowToHelp")
                },
                {
                  label: "Značajne informacije",
                  onPress: () => navigation.navigate("ValInfo")
                },
                {
                  label: "Mentalno zdravlje u vreme pandemije COVID-19",
                  onPress: () => navigation.navigate("Pandemic"),
                },
                {
                  label: "O udruženju i o aplikaciji",
                  onPress: () => navigation.navigate("About")
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
