import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import NavigationButtonList from "../NavigationButtonList";
import styles from "./styles";

const ClickableText = ({ text, onPress }) => (
  <TouchableOpacity style={styles.clickableTextContainer} onPress={onPress}>
    <Text style={styles.clickableTextText}>{text}</Text>
  </TouchableOpacity>
);

export default class ThinkingAbout extends React.Component {
  static navigationOptions = {
    title: "Kako pomoći?"
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: "100%" }}
            source={require("../../images/howToHelp.png")}
          />
          <View style={styles.innerContent}>
            <ArticleTitle label="Šta možete da uradite?" />
            <Text style={styles.body}>
              Istraživanja pokazuju da{" "}
              <Text style={{ fontWeight: "bold" }}>
                8 od 10 osoba koje razmišljaju o samoubistvu daju znake o svojoj
                nameri.
              </Text>{" "}
              Tada je podrška koju dobijaju od okoline od izuzetnog značaja. U
              nastavku se nalaze informacije koje bi mogle da ti pomognu da
              prepoznaš znake i na njih reaguješ. Saznanje da neko nama bitan
              razmišlja o samoubistvu može da izazove različite i bolne emocije
              – poput tuge, besa, krivice, nerazumevanja, straha… Potpuno je
              normalno da osetiš neke ili sve od tih emocija. Da bi očuvao/la
              svoje zdravlje i bio podrška nekom ko pati pokušaj da u svojoj
              okolini pronađeš osobe koje ti mogu pružiti podršku, sa kojima se
              možeš posavetovati ili razgovarati i/ili stručnu pomoć psihologa
              ili psihoterapeuta.
            </Text>
          </View>
          <NavigationButtonList
            buttons={[
              {
                label: "Znaci upozorenja",
                onPress: () => navigation.navigate("WarnSigns")
              },
              {
                label: "Priručnik podrške",
                onPress: () => navigation.navigate("SupportManual")
              },
              {
                label: "Mitovi o samoubistvu",
                onPress: () => navigation.navigate("SuicideMyths")
              }
            ]}
          />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
