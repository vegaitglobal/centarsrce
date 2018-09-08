import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnCon}>
          <Image
            source={require("../../images/call.png")}
            style={styles.navIcon}
          />
          <Text> Call </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCon}>
          <Image
            source={require("../../images/mail.png")}
            style={styles.navIcon}
          />
          <Text> Email </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCon}>
          <Image
            source={require("../../images/chat.png")}
            style={styles.navIcon}
          />
          <Text> Chat </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
