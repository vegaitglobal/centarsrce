import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import NavigationButton from "./NavigationButton";

export default class ThinkingAbout extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.header}>Razmišljaš o samoubistvu?</Text>
        </View>
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
              niti bilo kakav drugi stručnjak za mentalno zdravlje, već samo
              neko ko zna kako je kada se osećaš loše.
            </Text>
            <Text>Pročitaj više</Text>
          </View>
          <View style={styles.listContainer}>
            <NavigationButton style={styles.buttonStyle}>
              Kako da pomognem sebi sada?
            </NavigationButton>
            <NavigationButton style={styles.buttonStyle}>
              Moj sigurnosni plan
            </NavigationButton>
            <NavigationButton style={styles.buttonStyle}>
              Moj dnevnik
            </NavigationButton>
            <NavigationButton style={styles.buttonStyle}>
              Moj spomenar
            </NavigationButton>
            <NavigationButton style={styles.buttonStyle}>
              Psihološki priručnik
            </NavigationButton>
            <NavigationButton style={styles.buttonStyle}>
              Podrška
            </NavigationButton>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start"
  },
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
