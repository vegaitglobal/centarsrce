import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import NavigationButtonList from "../NavigationButtonList";
import styles from "./styles";
import { askPermissions } from "../my_files/LocalStorage";

const ClickableText = ({ text, onPress }) => (
  <TouchableOpacity style={styles.clickableTextContainer} onPress={onPress}>
    <Text style={styles.clickableTextText}>{text}</Text>
  </TouchableOpacity>
);

export default class ThinkingAbout extends React.Component {
  static navigationOptions = {
    title: "Razmišljaš o samoubistvu?"
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
            source={require("../../images/thinkingAbout.png")}
          />
          <View style={styles.innerContent}>
            <ArticleTitle label="Razmišljaš o samoubistvu?" />
            <Text style={styles.body}>
              Veliki broj ljudi u nekom trenutku pomisli na samoubistvo. Misli
              da se okonča svoj život može se pojaviti iz raznih razloga i često
              njihova pojava izazove strah u nama.
            </Text>
            {!this.state.seeingMore && (
              <ClickableText
                text="Pročitaj više"
                onPress={this.toggleSeeingMore}
              />
            )}
            {this.state.seeingMore && (
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text style={styles.expandedText}>
                  Verovatno se osećaš usamljeno, zbunjeno, preplavljeno raznim
                  snažnim osećanjima, bespomoćno. Možda osećaš tugu, krivicu,
                  bes, stid… Hronično osećanje praznine te dovodi u iskušenje da
                  pomisliš ima li smisla dalje nastaviti sa životom. Ponekad su
                  osećanja toliko snažna da ti se čini da gubiš kontrolu, da ne
                  možeš više da izdržiš. Kada pomisliš da želiš da se ubiješ, ne
                  brini to nije znak da si poludeo/la ili da si slaba osoba.{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    Jednostavno u trenutku kada postane jako teško samoubistvo
                    se učini kao rešenje da se izbrišu snažna i preplavljujuća
                    osećanja.
                  </Text>{" "}
                  Međutim, važno je da znaš da{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    u tim trenucima nisi sam/a.
                  </Text>
                  {"\n"}
                  Misli o samoubistvu nisu poput prehlade i ne prolaze olako,
                  ali nisu ni sramota koja bi nas sprečila da potražimo pomoć.
                  Postoje razne mogućnosti kako doći do podrške, nadamo se da će
                  ti ova aplikacija pomoći da ih prepoznaš.
                  {"\n"}
                  Kroz ovu aplikaciju ti nudimo načine kako da pomogneš sebi i
                  nađeš podršku kada se suočiš sa neprijatnim osećanjima i
                  mislima. Ovaj meni sadrži dodatne stranice na kojima možeš
                  pronaći korisne saveta, kao i da kreiraš svoj kutak koji će ti
                  pomoći kada postane teško. Svaka stranica sadrži objašnjenje
                  kako da je koristiš, nadamo se da će ti one biti od pomoći.
                </Text>
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
                label: "Kako da pomognem sebi sada?",
                onPress: () => navigation.navigate("HelpMyself")
              },
              {
                label: "Moj sigurnosni plan",
                onPress: () => navigation.navigate("SafetyPlan")
              },
              {
                label: "Moj dnevnik",
                onPress: () => navigation.navigate("Diary")
              },
              {
                label: "Moj spomenar",
                onPress: async () => { await askPermissions(); navigation.navigate('MyFiles');}
              },
              {
                label: "Psihološki priručnik",
                onPress: () => navigation.navigate("PsychoManual")
              },
              {
                label: "Podrška",
                onPress: () => navigation.navigate("Support")
              }
            ]}
          />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
