import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class PsychoManual extends React.Component {
  static navigationOptions = {
    title: "Psihološki priručnik"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Psihološki priručnik" />
          <Text style={styles.body}>
            Mentalno zdravlje može da se razume kao stanje blagostanja u kom
            osoba ostvaruje svoje sposobnosti, može da se nosi sa normalnim
            nivoom stresa u životu, produktivno da radi i da je u mogućnosti da
            doprinese svojoj zajednici. Kao što treba da vodimo računa o
            fizičkom zdravlju, tako{" "}
            <Text style={{ fontWeight: "bold" }}>
              ne smemo da zanemarimo ni brigu o svom mentalnom zdravlju.
            </Text>{" "}
            Određene strategije mogu značajno doprineti prevenciji problema, kao
            i samom suočavanju sa njima:
          </Text>
          <Text style={styles.bullet}>
            ➊ {"  "}
            <Text style={styles.bulletText}>
              Značajno je imati{" "}
              <Text style={{ fontWeight: "bold" }}>
                bliske odnose sa drugim ljudima.
              </Text>{" "}
              Podržavajući roditelji, prijatelji ili druge bliske osobe nam
              pružaju osećaj pripadnosti, a samo naše opažanje da postoji neko
              ko je tu za nas u teškim momentima, utiče pozitivno na naše
              mentalno zdravlje. Drugi nam mogu pomoći da problem sagledamo sa
              različite tačke gledišta, ili prosto ukazati na to da nismo sami.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➋{"  "}
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: "bold" }}>
                Razgovaraj o svojim osećajima!
              </Text>{" "}
              Značajno je da povremeno posmatramo kako se osećamo i vodimo brigu
              o istom. Razgovor o tome kako se osećaš nije znak slabosti, niti
              je vođenje računa o sebi sebičnost. Oba su znak da vodiš računa o
              svom mentalnom zdravlju. Sam razgovor može pomoći da se nosiš sa
              problemom sa kojim se suočavaš već duži period.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➌{"  "}
            <Text style={styles.bulletText}>
              Napravi pauzu! Kada se osećamo preplavljeno,{" "}
              <Text style={{ fontWeight: "bold" }}>u redu je odmoriti</Text>
              tako što ćemo raditi nešto što nam prija, ili čak ne raditi mnogo
              toga. Udahni, oslušni svoje telo. Ukoliko se osećaš umorno, daj
              sebi vremena da nadoknadiš izgubljeno.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➍{"  "}
            <Text style={styles.bulletText}>
              Potraži pomoć! Niko od nas nije nadčovek. Svako od nas iskusi
              stanje anksioznosti ili se u nekom periodu života nađe u emotivnoj
              krizi. Ukoliko osetimo da nam je previše teško,{" "}
              <Text style={{ fontWeight: "bold" }}>
                bitno je da umemo da potražimo pomoć bliskih osoba ili
                stručnjaka.
              </Text>
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➎{"  "}
            <Text style={styles.bulletText}>
              Kada se nađemo u situaciji da ne možemo istog momenta doći do
              stručne pomoći, ili pomoći nekog bližnjeg, bitno je da znamo
              određene tehnike koje nam trenutno pomažu da se suočimo sa
              preplavljujućim emocijama. Pokušaj da se baviš određenom
              aktivnošću koja zahteva da se fokusiraš i usmeriš pažnju na neki
              njen deo. To pomaže da smiriš um i telo. Na primer, zažmuri i
              pokušaj da oslušneš vetar, da osetiš koji mirisi se njime šire,
              kako ti vetar prelazi preko kože i dr. Još jedna od načina je da
              pokušaš da se setiš svog “sigurnog mesta”, odnosno nekog perioda
              života u kojem si se osećao/la sigurno. Pokušaj da se prisetiš
              koja su osećanja i misli tada u tebi bile prisutne.
            </Text>
          </Text>
          <Text style={styles.bullet}>
            ➏ {"  "}
            <Text style={styles.bulletText}>
              Neophodno je{" "}
              <Text style={{ fontWeight: "bold" }}>
                voditi računa o fizičkom zdravlju.
              </Text>{" "}
              Podela na fizičko i mentalno zdravlje, iako je široko
              rasprostranjena, ipak jeste veštačka tvorevina. Izreka “U zdravom
              telu, zdrav duh” najslikovitije prikazuje uzajamni značaj jednog
              na drugo. Kao što telo treba zdravo hraniti, razvijati, odmarati,
              negovati tako i psihički deo treba razvijati.
              {"\n\n"}
            </Text>
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
