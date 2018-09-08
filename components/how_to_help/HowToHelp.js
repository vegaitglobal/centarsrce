import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "../../helpers/colors";
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

  constructor(props) {
    super(props);
    this.state = {
      seeingMore: false
    };
    this.toggleSeeingMore = this.toggleSeeingMore.bind(this);
  }

  toggleSeeingMore() {
    this.setState({ seeingMore: !this.state.seeingMore });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: "100%" }}
            source={require("../../images/howToHelp.png")}
          />
          <View style={{ backgroundColor: colors.white }}>
            <ArticleTitle label="Šta možete da uradite?" />
            <Text style={styles.body}>
              Ukoliko ste primetili da osoba koju poznajete pati, ako posumnjate
              da gubi volju za životom, ponudite joj razgovor. Potrebno je da
              joj pokažete da nije sama. Stavite se u poziciju te osobe i to će
              vam pomoći da bolje razumete kroz šta prolazi, a i pomoći će vama
              da reagujete na prirodan način.
            </Text>
            {!this.state.seeingMore && (
              <ClickableText
                text="Pročitaj više"
                onPress={this.toggleSeeingMore}
              />
            )}
            {this.state.seeingMore && (
              <View>
                <ClickableText
                  text="Pročitaj manje"
                  onPress={this.toggleSeeingMore}
                />
              </View>
            )}
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
