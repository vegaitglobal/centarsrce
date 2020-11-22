import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class HelpMyself extends React.Component {
  static navigationOptions = {
    title: "Kako da pomognem sebi sada?"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Kako da pomognem sebi sada?" />
          <Text style={styles.body}>
            Samoubistvo nije izbor, ono se desi kada imamo utisak da je patnja
            jača od naših mehanizma da se suočimo sa njom. Možda imaš utisak da
            patnja nikada neće nestati i da postaje sve teže. Želiš da se ovo
            što pre završi, da doživiš olakšanje, da ovu teskobu ne osećaš više.
            To ne znači da si slaba ili luda osoba. Ponekad patnja postane
            toliko intenzivna da ona prevaziđe našu snagu da se borimo sa njom. {" "}
            <Text style={{ fontWeight: "bold" }}>
              Često misli o samoubistvu ni ne znače da želiš da se ubiješ, već
              da ti je potreban odmor.
            </Text>{" "}
            Iako ti se u ovom trenutku sve čini beznadežno i svaki naredni minut
            neizdrživ, potrebno da je da znaš da{" "}
            <Text style={{ fontWeight: "bold" }}>
              postoje načini da dođeš do pomoći.
            </Text>{" "}
            Sačekaj, nemoj još donositi odluku o tome da li ćeš nauditi sebi.{" "}
            <Text style={{ fontWeight: "bold" }}>
              Ne moraš odmah odreagovati.
            </Text>{" "}
            Odluku o životu ili smrti nije lako doneti, niti je potrebno sada
            odmah da odlučiš.{" "}
            <Text style={{ fontWeight: "bold" }}>
              Uvek imaš i treću opciju, da ostaneš na sigurnom za sada.
            </Text>{" "}
            Misli o samoubistvu jesu prolazne i većina njih ih prevaziđe.
            Zastani na trenutak,{" "}
            <Text style={{ fontWeight: "bold" }}>
              daj sebi vremena i prati sledeće korake:
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➊{"  "}
            <Text style={styles.bulletText}>
              Obećaj sebi da{" "}
              <Text style={{ fontWeight: "bold" }}>
                danas nećeš učiniti ništa drastično.
              </Text>{" "}
              Zapamti, misliti o samoubistvu i nauditi sebi nije isto. Samo zato
              što osećaš da bi naudio/la sebi ne znači da to moraš i da učiniš u
              ovom trenutku. Bitno je da napraviš raskorak između misli o
              samoubistvu i ponašanja da to i učiniš. Uspeo/la si ovih 5 minuta
              dok čitaš ovu aplikaciju, uspećeš i u narednim minutima ako tako
              nastaviš.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➋{"  "}
            <Text style={styles.bulletText}>
              Potrudi se da{" "}
              <Text style={{ fontWeight: "bold" }}>ostaneš na sigurnom</Text>,
              skloni sva moguća sredstva sa kojima možeš da naudiš sebi, ukoliko
              postoji mogućnost pitaj nekog da ti pomogne u tome. Ovo podrazume
              i da se skloniš sa opasnih mesta. Potrudi se da učiniš svoj dom
              sigurnim utočištem.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➌{"  "}
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: "bold" }}>Razgovaraj sa nekim</Text> -
              porodicom, prijateljem ili stručnjakom. Razgovor o tome kako se
              osećaš i kroz šta prolaziš može da umanji patnju. Podela svog
              „tereta“ sa nekim umanjuje osećaj usamljenosti. Ne odustaj, moguće
              je da će neko teško prihvatiti razgovor o samoubistvu. To nije
              zato što te osuđuju ili odbacuju. Iz osećanja straha i
              nesigurnosti kako da ti pomognu možda odreaguju na način koji ti u
              tom trenutku neće biti podržavajući. Ukoliko želiš da razgovaraš
              sa nekim a da to bude anonimno i poverljivo, možeš nazvati
              volontere Centra „Srce“ (Centar za prevenciju samoubistva) koji su
              tu za tebe svakim danom od 14 do 23h. Ili ih možeš kontaktirati
              putem e-maila i chata. Kontakte možeš pronaći na dnu svake
              stranice.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➍{"  "}
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: "bold" }}>
                Izbegavaj alkohol i druge psihoaktivne supstance.
              </Text>{" "}
              Njihova upotreba pojačava intenzitet osećanja i doživljaj patnje,
              što podstiče impulsivno reagovanje.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➎{"  "}
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: "bold" }}>
                Pregledaj svoj sigurnosni plan.
              </Text>{" "}
              Bitno je da se u ovom trenutku osećaš sigurno. Ukoliko nemaš još
              kreiran sigurnosni plan, važno je da ga sada ispuniš. Takođe,
              pregledaj ostale delove ove aplikacije koje ti mogu biti korisne.
              {"\n\n"}
            </Text>
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
