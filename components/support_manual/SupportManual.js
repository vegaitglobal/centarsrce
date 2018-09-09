import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class SupportManual extends React.Component {
  static navigationOptions = {
    title: "Priručnik podrške"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Priručnik podrške" />
          <Text style={styles.body}>
            Ukoliko si primetio/la da bliska osoba pati i posumnjao/la da gubi
            volju za životom,{" "}
            <Text style={{ fontWeight: "bold" }}>ponudi joj razgovor.</Text>
            {"\n"}
            Potrebno je{" "}
            <Text style={{ fontWeight: "bold" }}>
              da joj pokažeš da nije sama, da je razumeš i prihvataš
            </Text>
            takvu kakva jeste. Osoba koja razmišlja o samoubistvu pati i
            potrebna joj je iskrena podrška i razumevanje. Pokušaj da se staviš
            u njenu poziciju i to će ti pomoći da bolje razumeš kroz šta
            prolazi, a i pomoći će tebi da reaguješ na prirodan način. Bitno je
            <Text style={{ fontWeight: "bold" }}>
              da ne morališeš, ne sažaljevaš i ne daješ brze savete.
            </Text>{" "}
            Osoba koja razmišlja o samoubistvu je već pokušala da pomogne sebi
            na različite načine, ali ne uspeva. Dodatan pritisak može da je
            zatvori i udalji od dalje komunikacije.
            {"\n\n"}
            Pokaži da saosećaš sa njom, budi topao/la i strpljiv/a.{" "}
            <Text style={{ fontWeight: "bold" }}>
              Nemoj se ustručavati da postaviš pitanje o samoubistvu.
            </Text>{" "}
            Ne možeš joj „usaditi tu ideju u glavu“, a ukoliko zaista razmišlja
            o samoubistvu, osetiće olakšanje što sa nekim može da podeli teško
            breme.
            {"\n\n"}
            Ako sumnjaš (i ako utvrdiš) da je osoba suicidna, vrlo je važno da
            ispitaš da li ima plan samoubistva i da li ima sredstva da taj plan
            ostvari, jer to govori o visini suicidnog rizika. Ne ostavljaj je
            samu. Skloni sve predmete kojima bi mogla sebe da povredi. Pomozi
            joj da shvati da nepodnošljivi unutrašnji doživljaj koji ima neće
            trajati večno, i da samoubistvo ne mora biti rešenje. Nemoj
            pokušavati da je „razveseliš“ ni omalovažavaš problem („ma proćiće
            ti to“, „nije to tako strašno“). Nemoj se usredsrediti na rešavanje
            problema (saveti, primeri drugih u sličnim situacijama i dr.) ili
            držati slovo o vrednosti života i pravu na samoubistvo. Sve to je
            osoba već prošla u svojoj glavi, nije joj potrebna dodatna osuda.
            {"\n\n"}
            Nažalost, većini ljudi je vrlo neprijatno da razgovaraju o
            samoubistvu. U našoj kulturi je to tabu tema i društvo uglavnom
            ignoriše postojanje problema. Ali činjenica je da na zemlji gotovo
            milion ljudi godišnje izvrši samoubistvo. Zato se nemoj ustručavati
            i ponudi pomoć onome kome je potrebna!
            {"\n\n"}
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
