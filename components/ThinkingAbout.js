import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import NavigationButtonList from "./NavigationButtonList";

const styles = StyleSheet.create({
  contentContainer: {
    margin: 30
  },
  title: {
    color: "#8d62a6",
    fontSize: 22
  },
  body: {
    fontSize: 14
  }
});

export default class ThinkingAbout extends React.Component {
  static navigationOptions = {
    title: "Razmišljaš o samoubistvu?"
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Image
          style={{ width: "100%" }}
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
        <NavigationButtonList
          buttons={[
            {
              label: "Kako da pomognem sebi sada?",
              onPress: () => navigation.navigate("Placeholder")
            },
            {
              label: "Moj sigurnosni plan",
              onPress: () => navigation.navigate("Placeholder")
            },
            {
              label: "Moj dnevnik",
              onPress: () => navigation.navigate("Placeholder")
            },
            {
              label: "Moj spomenar",
              onPress: () => navigation.navigate("Placeholder")
            },
            {
              label: "Psihološki priručnik",
              onPress: () => navigation.navigate("Placeholder")
            },
            {
              label: "Podrška",
              onPress: () => navigation.navigate("Placeholder")
            }
          ]}
        />
      </ScrollView>
    );
  }
}
