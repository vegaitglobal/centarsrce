import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { phonecall } from "react-native-communications";
import colors from "../../helpers/colors";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class Pandemic extends React.Component {
  static navigationOptions = {
    title: "Mentalno zdravlje u vreme pandemije COVID-19",
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Mentalno zdravlje u vreme pandemije COVID-19" />
          <Paragraph>
            Virus COVID-19 je već pokazao kako teške posledice može ostaviti na
            naše fizičko zdravlje. Na žalost, on ima znatan uticaj i na naše
            mentalno zdravlje. Postajemo svedoci da je u našem okruženju sve
            više onih koji su usamljeni, uplašeni i sa krajnjom neizvesnošću
            gledaju u blisku budućnost.
          </Paragraph>
          <Paragraph>
            Suočavanje sa ovim virusom je nova situacija za sve i promene koje
            se dešavaju su mnogostruke, naročito među mladima:
          </Paragraph>
          <Bullet>
            fizička distanca, čak ponekad i od osoba koje su glavni izvor
            podrške
          </Bullet>
          <Bullet>karantin, ograničeno kretanje ili potpuna izolacija</Bullet>
          <Bullet>prekinuto ili veoma otežano obrazovanje</Bullet>
          <Bullet>nemogućnost obeležavanja važnih događaja</Bullet>
          <Bullet>gubitak posla i finansijska neizvesnost</Bullet>
          <Bullet>povratak na život sa roditeljima</Bullet>
          <Bullet>
            preplavljenost informacijama koje su često međusobno kontradiktorne
          </Bullet>
          <Bullet>suočavanje sa bolešću i neizvesnim ishodima</Bullet>
          <Bullet>gubitak privatnosti</Bullet>
          <Bullet>
            nemogućnost bavljenja sportom, hobijima i stvarima koje relaksiraju
          </Bullet>
          <Bullet>ograničene mogućnosti za putovanje</Bullet>
          <Bullet>dodatne komplikacije u skoro svim postupcima</Bullet>
          <Paragraph>
            Ako se i ti součavaš sa nekim od ovih promena treba da znaš da one
            mogu da utiču i na tvoje mentalno zdravlje. Javljaju se osećanja
            poput straha, usamljenosti, očaja, neizvesnosti, beznađa i mnogih
            drugih. Ponekad ova osećanja dovode do poteškoća u našem
            funkcionisanju pa se suočavamo sa pojavama kao što su nesanica,
            agresija, anksioznost, depresija, opsesivno-kompulsivne radnje.
            Nekada čak situacija deluje toliko teška i bezizlazna da pomišljamo
            na samoubistvo.
          </Paragraph>
          <Paragraph>
            To što prepoznajneš kod sebe neka od ovih osećanja ili ponašanja je
            u redu. Svi reagujemo različito na stresne situacije, a situacija
            suočavanja sa virusom COVID-19 je toliko rasprostranjena da na
            svakog može ostaviti posledice. Važno je da promene koje primećuješ
            ne ignorišeš i da ne misliš da će jednostavno nestati same od sebe.
            Takođe neće pomoći ako pokušavaš da pobegneš od njih tako što ćeš
            preterano spavati ili prekidati svaki kontakt sa okolinom. Naprotiv,
            pokušaj da pronađeš bliske osobe od poverenja sa kojima možeš
            iskreno da razgovaraš. Razmena misli i osećanja sa porodicom,
            prijateljima i drugim bliskim osobama često pomaže da se pritisak
            koji osećamo smanji, da stvari sagledamo iz druge perspektive,
            čujemo kakva iskustva imaju drugi u takvim situacijama i da shvatimo
            koliko im je stalo do nas.
          </Paragraph>
          <Paragraph>
            Lično susretanje ne mora biti presudno za osećaj bliskosti, naročito
            u situaciji kada smo prinuđeni da se fizički distanciramo. Na sreću,
            puno je načina na koji možemo komunicirati i ostvarivati podjednako
            blizak kontakt - telefon, internet, društvene mreže...
          </Paragraph>
          <Paragraph>
            Pored toga, puno je zdravih načina koji pomažu da brineš o sebi i
            svom zdravlju:
          </Paragraph>
          <Bullet>radi stvari i kojima uživaš i koje ti prijaju</Bullet>
          <Bullet>
            vodi računa o svom telu i zdravim životnim navikama (ishrana,
            vežbanje, spavanje, higijena...)
          </Bullet>
          <Bullet>
            pridržavaj se saveta stručnjaka u vezi sa preventivnim merama i
            rizičnim ponašanjem
          </Bullet>
          <Bullet>
            informiši se unapred o aktivnostima koje treba da preduzmeš ako si
            bio/bila u rizičnom kontaktu ili ako osećaš neke simptome bolesti
          </Bullet>
          <Bullet>
            nemoj se previše izlagati uznemirujućim vestima i izaberi izvore
            informacija kojima veruješ
          </Bullet>
          <Bullet>pronađi način da pomažeš drugima</Bullet>
          <Bullet>uspostavi dnevnu rutinu koje ćeš se pridržavati</Bullet>
          <Bullet>pronađi sopstveni način suočavanja sa izazovima</Bullet>
          <Paragraph>
            Ponekad se dešava da, uprkos svim stvarima koje pokušavaš da uradiš
            da sebi pomogneš, danima ne uspevaš da izađeš iz neprijatnih
            osećanja i da se osećaš bolje. U takvim situacijama može biti dobra
            ideja da se obratiš nekoj službi koja nudi psihološku pomoć i
            podršku:
          </Paragraph>
          <Bullet>Hitna medicinska pomoć</Bullet>
          <Bullet>Izabrani lekar i psihijatar u domu zdravlja</Bullet>
          <Bullet>Psiholozi</Bullet>
          <View style={[styles.bulletContainer, styles.row]}>
            <Text style={styles.bullet}>⬤{"  "}</Text>
            <Text style={styles.bulletText}>
              Nacionalna linija za pravenciju samoubistva (
            </Text>
            <TouchableOpacity onPress={() => phonecall("0800309309", true)}>
              <Text style={{ color: colors.darkPurple }}>0800/309-309</Text>
            </TouchableOpacity>
            <Text style={styles.bulletText}>, 00-24h)</Text>
          </View>
          <View style={[styles.bulletContainer, styles.row]}>
            <Text style={styles.bullet}>⬤{"  "}</Text>
            <Text style={styles.bulletText}>
              Centar „Srce“ (besplatni tel.{" "}
            </Text>
            <TouchableOpacity onPress={() => phonecall("0800300303", true)}>
              <Text style={{ color: colors.darkPurple }}>0800-300-303</Text>
            </TouchableOpacity>
            <Text style={styles.bulletText}>, svakog dana 14-23h)</Text>
          </View>
          <Bullet>Psihoterapeuti</Bullet>
          <Bullet>Specijalističke ustanove</Bullet>
          <Bullet>Psihijatrijske klinike</Bullet>
          <Bullet>
            Telefonske službe pri domovima zdravlja i kliničkim centrima koje
            pružaju psihološku pomoć
          </Bullet>
          <Paragraph>
            Neke od ovih službi su prilagodile svoj rad uslovima u doba
            pandemije pa se pomoć može dobiti i putem telefona ili interneta.
          </Paragraph>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

class Paragraph extends React.Component {
  render() {
    return <Text style={styles.paragraph}>{this.props.children}</Text>;
  }
}

class Bullet extends React.Component {
  render() {
    return (
      <Text style={[styles.bulletContainer, styles.bullet]}>
        ⬤{"  "}
        <Text style={styles.bulletText}>{this.props.children}</Text>
      </Text>
    );
  }
}
