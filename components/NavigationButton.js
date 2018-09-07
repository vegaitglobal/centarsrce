import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 20,
    textAlign: "center"
  }
});

class NavigationButton extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.button}>{this.props.children}</Text>
      </View>
    );
  }
}

export default NavigationButton;
