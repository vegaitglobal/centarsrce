import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnCon}>
          <Image
            source={require("../../images/poziv.png")}
            style={styles.callIcon}
          />
          <Text>Poziv</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCon}>
          <Image
            source={require("../../images/mail.png")}
            style={styles.mailIcon}
          />
          <Text>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCon}>
          <Image
            source={require("../../images/chat.png")}
            style={styles.chatIcon}
          />
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
