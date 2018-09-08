import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import NavigationButton from "./NavigationButton";

export default class ThinkingAbout extends React.Component {
  static navigationOptions = {
    title: "Razmišljaš o samoubistvu?"
  };

  render() {
    return (
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../images/thinkingAbout.png")}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Molim te da prvo pročitaš sledeće</Text>
          <Text style={styles.body}>
            Ako te trenutno muče misli o samoubistvu, daj sebi malo vremena da
            pročitaš ovaj tekst. Trebaće ti samo pet minuta. Ne želim da te
            odgovaram od tvojih neprijatnih osećanja. Nisam ni psihoterapeut
            niti bilo kakav drugi stručnjak za mentalno zdravlje, već samo neko
            ko zna kako je kada se osećaš loše.
          </Text>
          {/* TODO */}
          <Text>Pročitaj više</Text>
        </View>
        <View style={styles.listContainer}>
          <NavigationButton
            label="Kako da pomognem sebi sada?"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="Moj sigurnosni plan"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="Moj dnevnik"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="Moj spomenar"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="Psihološki priručnik"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
          <NavigationButton
            label="Podrška"
            onPress={() => this.props.navigation.navigate("Placeholder")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#8d62a6",
    color: "white",
    fontSize: 16,
    padding: 19,
    textAlign: "center"
  },
  image: {
    width: "100%"
  },
  contentContainer: {
    margin: 30
  },
  title: {
    color: "#8d62a6",
    fontSize: 22
  },
  body: {
    fontSize: 14
  },
  listContainer: {
    backgroundColor: "#b298c1"
  },
  buttonStyle: {
    marginHorizontal: 16,
    marginVertical: 26
  }
});
