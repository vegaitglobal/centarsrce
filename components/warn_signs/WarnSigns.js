import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class WarnSigns extends React.Component {
  static navigationOptions = {
    title: "Znaci upozorenja"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Znaci upozorenja" />
          <Text style={styles.body}>
            Veliki broj osoba koje su izvršile ili pokušale samoubistvo,
            prethodno su intenzivno razmišljali o tome, odlučujući se da li da
            to učine i planirajući kako, kada i gde. Oni su pokazivali neke od
            sledećih znakova:
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              promene raspoloženja i ponašanje - tužni su, povučeni, osetljivi,
              nervozni, umorni, neodlučni, bezvoljni, nekad uznemireni i
              hiperaktivni, ne mogu da se skoncentrišu na redovne obaveze,
              nezainteresovani su za svoj izgled
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              promene u spavanju, navikama u ishrani, interesovanjima
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              plaše se gubitka kontrole, da će „poludeti“, da će povrediti sebe
              ili druge
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              opterećeni su osećanjem krivice, stida, samomržnje, vraćaju se na
              događaj iz prošlosti koji je nemoguće ispraviti
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              nemaju nade za budućnost – „nikad mi neće biti bolje“, „uvek ću se
              ovako osećati“, „nema smisla nadati se“
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              sređuju svoje poslove, dugove, pozdravljaju se sa prijateljima i
              rodbinom, poklanjaju vredne lične stvari
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              imaju suicidalne impulse, ideje, izjave, planove, ranije pokušaje
              samoubistva, ponašaju se na način koji može biti opasan (neoprezni
              su u saobraćaju, voze pod dejstvom alkohola...)
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ⬤{"  "}
            <Text style={styles.bulletText}>
              bili su ili jesu žrtve zlostavljanja (vršnjačkog, porodičnog,
              fizičkog ili seksualnog)
            </Text>
          </Text>
          <Text style={styles.body}>
            Naravno, svaka od ovih karakteristika sama po sebi ne mora ništa da
            znači, ali kombinacija nekoliko njih često upućuje na to da postoji
            rizik da će osoba izvršiti samoubistvo.
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
