import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class Support extends React.Component {
  static navigationOptions = {
    title: "Podrška"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Podrška" />
          <Text style={styles.body}>
            Centar „Srce“ čine volonteri koji svakodnevno putem telefona, mejla
            i chata razgovaraju sa ljudima koji razmišljaju o samoubistvu ili
            prolaze kroz neku drugu vrstu emotivne krize. Nastoje da ih
            razumeju, pruže im podršku i prostor u kom mogu izraziti sve što
            osećaju. Svi naši razgovori su anonimni i poverljivi.
            {"\n\n"}
            Ukoliko se osećaš usamljeno i imaš utisak da nemaš sa kim da podeliš
            ono kroz šta trenutno prolaziš, budi slobodan/na da nas nazoveš ili
            da nam pišeš. Kontakt Centra se nalazi na dnu svake stranice. Mi
            verujem da razgovor pomaže.
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
