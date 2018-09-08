import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class ArticleTitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.label}</Text>
      </View>
    );
  }
}
