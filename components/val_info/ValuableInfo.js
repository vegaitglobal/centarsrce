import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class ValInfo extends React.Component {
  static navigationOptions = {
    title: "Značajne informacije"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Značajne informacije" />
          <Text style={styles.body}>
            Prema podacima Svetske zdravstvene organizacije,{" "}
            <Text style={{ fontWeight: "bold" }}>svake godine 800 000</Text>{" "}
            osoba izvrši samoubistvo, što je{" "}
            <Text style={{ fontWeight: "bold" }}>
              1 osoba na svakih 40 sekundi.
            </Text>{" "}
            U odnosu na jednu osobu koja izvrši samoubistvo,  {" "}
            <Text style={{ fontWeight: "bold" }}>20 osoba pokuša</Text> da
            oduzme sebi život. Dok je stopa samoubistva u svetu 18 na 100.000, u
            Srbiji je zabeležen trend pada u odnosu na ranije godine -13 na
            100.000.
            {"\n\n"}
            Na ovaj način okončan život je ogroman gubitak za članove porodice,
            bližnje, ali i za celokupnu zajednicu. U razumevanju suicida, veliki
            značaj zauzima razumevanje samih emocija- upravo iz tog razloga je
            bitno razgovarati o njima. Osoba koja se određeni period suočava sa
            životnim problemima, može da reaguje intenzivnim emocijama na širok
            spektar situacija, a da pri tome ima želju da emocionalni distres
            umanji ili izbegne. Istraživači ističu da je suicidalno ponašanje
            upravo pokušaj osobe da izbegne neizdržljivu psihološku bol.
            Intenzivne emocije se smenjuju, a istraživanja posebno ističu da
            osobe razmišljaju o samoubistvu, onda kada se duži vremenski period
            osećaju kao da ne pripadaju nigde ili da su drugima u svojoj okolini
            teret. Bitno je naglasiti da je sam doživljaj osobe dovoljan, čak i
            ako nije utemeljen u realnosti.
          </Text>
          <Text style={styles.iText}>
            Pojedini autori navode da se neće svaka osoba koja prolazi kroz sve
            gore navedeno odlučiti na samoubistvo. Šta onda dovodi do ove
            odluke?
          </Text>
          <Text style={styles.body}>
            Pored želje da se okonča život, autori naglašavaju drugi odlučujući
            faktor, a to je kapacitet za autodestruktivno ponašanje. Oni ističu
            da se ovaj kapacitet ne dobija rađanjem, već da se tokom života uči.
            Većina ljudi poseduje strah od smrti. Kada osoba počne sve češće da
            razmišlja o samoubistvu, načinu na koji bi to uradila, kada i drugo,
            ona s vremenom počinje u sve većoj meri da “gasi” odnosno umanjuje
            urođeni strah od smrti i da se “navikava” na po sebe fatalan prizor.
            {"\n\n"}
            Upravo zbog toga, bitno je otvoreno pitati osobu da li razmišlja o
            samoubistvu, proceniti u kojoj meri je prisutna namera i u kojoj
            meri je osoba spremna da naudi sebi. Bitno je ponuditi neosuđujući
            razgovor, razumevanja i ohrabrivanje na potraživanje stručne pomoći.
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
