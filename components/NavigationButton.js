import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 999,
    padding: 20,
    marginHorizontal: 26,
    marginVertical: 8
  },
  text: {
    textAlign: "center"
  }
});

export default class NavigationButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
