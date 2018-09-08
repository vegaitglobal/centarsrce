import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class MyFiles extends React.Component {
  static navigationOptions = {
    title: "Moj spomenar"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Sačuvaj sve bitne dokumente" />
          <Text style={styles.body}>
            Ovo je deo u kom možeš sačuvati sebi značajne fotografije, članke
            ili druge bitne dokumente.
          </Text>
          <View style={styles.filesCon} />
        </ScrollView>
        <Image
          style={(style = styles.plusImg)}
          source={require("../../images/plus.png")}
        />
        <Footer />
      </View>
    );
  }
}
