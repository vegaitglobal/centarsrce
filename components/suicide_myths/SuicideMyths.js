import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class SuicideMyths extends React.Component {
  static navigationOptions = {
    title: "Mitovi o samoubistvu"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Mitovi o samoubistvu" />
          <Text style={styles.body}>
            Samoubistvo je u našem društvu tabu tema koju okružuju različite
            predrasude. Postoji potreba za promenom stava javnosti i povećanje
            nivoa svesti o samom problemu i o tome da on može da se prevenira.
            Neke od najčešćih su:
          </Text>
          <Text style={styles.body}>
            <Text style={{ fontStyle: "italic" }}>
              Ako je neko jednom bio suicidalan, ostaće suicidalan zauvek. Ako
              je neko rešio da će da se ubije, ništa ga neće zaustaviti.
            </Text>
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Netačno. </Text>
            Osobe koje žele da se ubiju su suicidalne samo ograničeni vremenski
            period. I neodlučnost u odnosu na život i smrt je izražena
            karakteristika suicidalnih pojedinaca. Mnogi od njih ne žele da umru
            već jednostavno žele da pobegnu iz nepodnošljive situacije iz koje
            ne vide ni jedan drugi izlaz.
          </Text>

          <Text style={styles.body}>
            <Text style={{ fontStyle: "italic" }}>
              Osobe koje pričaju da će se ubiti neće nikad preći sa reči na delo
              jer im je to samo način da manipulišu drugim ljudima. Oni koji
              izvršavaju samoubistvo inače ne govore o tome već to jednostavno
              urade.
            </Text>
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Netačno. </Text>
            Većina ljudi koja je izvršila ili pokušala samoubistvo davala je na
            direktan ili indirektan način nagoveštaje svojoj okolini da razmatra
            tu opciju. Nema potrebe da krivite sebe ako niste primetili te
            znake, ali ako ste zabrinuti za nekoga koga znate, možete da se
            informišete o tome šta možete da učinite da pomognete.
          </Text>

          <Text style={styles.body}>
            <Text style={{ fontStyle: "italic" }}>
              Loša je ideja da osobu pitamo da li razmišlja o samoubistvu. Time
              bismo joj mogli dati ideju da razmišlja u tom pravcu.
            </Text>
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Netačno. </Text>
            Ljudi često misle da je sigurnije ne pričati o samoubistvu sa osobom
            koja razmatra tu opciju (ili za koju sumnjamo da pomišlja da digne
            ruku na sebe). Naprotiv, razgovor može pomoći suicidalnom pojedincu
            da obradi teška osećanja i smanji nepodnošljivu tenziju. Spremnošću
            da osobu saslušamo šaljemo poruku da nam je stalo i da želimo da
            pomognemo.
          </Text>

          <Text style={styles.body}>
            <Text style={{ fontStyle: "italic" }}>
              Ako se depresivna ili suicidalna osoba bolje oseća, to znači da je
              problem prošao.
            </Text>
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Netačno. </Text>
            Ako neko ko je bio depresivan ili suicidalan odjednom deluje
            raspoloženije, ne mora da znači da je opasnost prošla. Osoba koja je
            čvrsto odlučila („prelomila”) da oduzme sebi život, može imati
            osećaj olakšanja zbog načinjene odluke. Takođe, ponekad se dešava da
            nakon prvih poboljšanja od depresije i povratka energije osoba
            konačno skupi snage i realizuje svoje suicidalne ideje.
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
