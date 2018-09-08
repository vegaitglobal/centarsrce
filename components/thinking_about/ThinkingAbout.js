import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";
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
          <View style={{ backgroundColor: colors.white }}>
            <Text style={styles.title}>Molim te da prvo pročitaš sledeće</Text>
            <Text style={styles.body}>
              Ako te trenutno muče misli o samoubistvu, daj sebi malo vremena da
              pročitaš ovaj tekst. Trebaće ti samo pet minuta. Ne želim da te
              odgovaram od tvojih neprijatnih osećanja. Nisam ni psihoterapeut
              niti bilo kakav drugi stručnjak za mentalno zdravlje, već samo
              neko ko zna kako je kada se osećaš loše.
            </Text>
            {!this.state.seeingMore && (
              <ClickableText
                text="Pročitaj više"
                onPress={this.toggleSeeingMore}
              />
            )}
            {this.state.seeingMore && (
              <View>
                <Text
                  style={{
                    color: colors.darkPurpleTransparent,
                    fontSize: normalize(72),
                    textAlign: "center"
                  }}
                >
                  “
                </Text>
                <Text
                  style={{
                    color: colors.darkPurple,
                    fontSize: normalize(14),
                    fontStyle: "italic",
                    fontWeight: "500",
                    textAlign: "center"
                  }}
                >
                  Samoubistvo se ne bira; ono se događa kada bol nadjača
                  mehanizme koji inače služe da ga ublaže.
                </Text>
                <Text style={styles.body}>
                  Kada bol postane suviše snažan da bismo mogli da ga
                  prevaziđemo, tada se javlja misao o samoubistvu. Samoubistvo
                  nije ni dobro ni pogrešno; nije nedostatak karaktera; ono je
                  moralno neutralno.
                </Text>
                <Text style={styles.body}>
                  To je prosto nesrazmera između bola i načina da se on ublaži.
                  Postoje dva načina da se otrgneš od razmišljanja o
                  samoubistvu:
                </Text>
                <Text>da pronađeš način da umanjiš bol</Text>
                <Text>da unaprediš metode kojima se bol može prevazići.</Text>
                <Text style={styles.body}>Obe mogućnosti dolaze u obzir.</Text>
                <Text style={styles.body}>
                  Sada bih želeo da ti skrenem pažnju na nekoliko stvari o
                  kojima bi trebalo da porazmisliš:
                </Text>
                <View style={{ backgroundColor: colors.darkPurpleTransparent }}>
                  <Text style={styles.body}>
                    <Text style={{ fontWeight: "bold" }}>
                      Treba da znaš da ima ljudi koji zaista uspevaju da
                      prebrode sva svoja razmišljanja o samoubistvu
                    </Text>{" "}
                    - čak i ljudi koji se osećaju isto tako loše kao i ti sada.
                    Statistički, šanse da i ti to ostvariš su sasvim dobre.
                    Nadam se da ti ova informacija pruža barem nekakvu nadu.
                  </Text>
                  <Text style={styles.body}>
                    Razmišljanja o samoubistvu su sama po sebi traumatična.
                    Nakon što ona izblede, moraš nastaviti da brineš o sebi.{" "}
                    <Text style={{ fontWeight: "bold" }}>
                      Terapija je zaista dobra ideja.
                    </Text>
                  </Text>
                  <Text style={styles.body}>
                    Ljudi često pribegavaju samoubistvu kada traže{" "}
                    <Text style={{ fontWeight: "bold" }}>
                      sklonište od bola kome su izloženi
                    </Text>
                    . Zapamti i da je osećaj olakšanja od bola samo osećaj i da
                    moraš biti živ da bi ga osetio. Nećeš nikako moći da osetiš
                    to olakšanje koje ti je tako potrebno ukoliko si mrtav.
                  </Text>
                </View>
                <Text style={styles.body}>
                  Pa, kao što vidiš, prošlo je već nekoliko minuta i ti si još
                  sa mnom. To mi je zaista drago.
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
                onPress: () => navigation.navigate("Placeholder")
              },
              {
                label: "Moj sigurnosni plan",
                onPress: () => navigation.navigate("Placeholder")
              },
              {
                label: "Moj dnevnik",
                onPress: () => navigation.navigate("Diary")
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
        <Footer />
      </View>
    );
  }
}
