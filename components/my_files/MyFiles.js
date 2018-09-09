import React from "react";
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from "react-native";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class MyFiles extends React.Component {
  static navigationOptions = {
    title: "Moj spomenar"
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
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ArticleTitle label="Sačuvaj sve bitne dokumente" />
          <Text style={styles.body}>
            Ovo je deo u kom možeš sačuvati sebi značajne fotografije, članke
            ili druge bitne dokumente.
          </Text>
        </ScrollView>
        {!this.state.seeingMore && <View />}
        {this.state.seeingMore && (
          <View>
            <TouchableOpacity
              style={styles.photoImgCon}
              onPress={() => ToastAndroid.show("Hi human!", ToastAndroid.SHORT)}
            >
              <Image
                style={styles.photo}
                source={require("../../images/photo.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.attachImgCon}
              onPress={() => ToastAndroid.show("Hi human!", ToastAndroid.SHORT)}
            >
              <Image
                style={styles.attach}
                source={require("../../images/attach.png")}
              />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.plusImgCon}
          onPress={this.toggleSeeingMore}
        >
          <Image
            style={styles.plusImg}
            source={require("../../images/plus.png")}
          />
        </TouchableOpacity>
        <Footer />
      </View>
    );
  }
}
