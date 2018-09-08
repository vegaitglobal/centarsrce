import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import colors from "../../helpers/colors";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class About extends React.Component {
  static navigationOptions = {
    title: "O udruženju i o aplikaciji"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: "100%" }}
            source={require("../../images/about.png")}
          />
          <View style={{ backgroundColor: colors.white }}>
            <ArticleTitle label="Osnovne informacije" />
            <Text style={styles.body}>
              Centar “Srce” sa sedištem u Novom Sadu je volonterska, nevladina,
              neprofitna organizacija koja se bavi pružanjem emotivne podrške
              osobama u krizi i prevencijom samoubistva.
              {"\n"}
              {"\n"}
              Svakog dana, od 17 do 23 časa, volonteri Centra “Srce” razgovaraju
              s ljudima koji su usamljeni, uznemireni, povređeni, tužni, očajni,
              nesigurni i - slušaju ih. Ne drže im moralne pridike, ne
              omalovažavaju njihove tegobe, ne “teše” ih da će njihovi problemi
              proći i, što je najvažnije, ne govore im šta da rade. Zato što
              veruju da svaki čovek sam najbolje zna šta je dobro za njega. Zato
              što veruju da svaki čovek ima prava da sam odlučuje o svom životu,
              čak i ako odluči da ga okonča.
              {"\n"}
              {"\n"}
              Svi podaci koje dobijemo od korisnika su strogo poverljivi i
              ostaju u okvirima Centra. Osobe koje nam se obraćaju mogu da
              zadrže anonimnost. Usluge Centra su besplatne.
              {"\n"}
              {"\n"}
              Kontakt telefon: 0800-300-303
              {"\n"}
              Kontakt email: vanja@centarsrce.org
            </Text>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
