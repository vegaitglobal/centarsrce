import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationButton from "./NavigationButton";

const styles = StyleSheet.create({
  buttonListContainer: {
    backgroundColor: "#b298c1",
    borderColor: "#8d62a6",
    borderTopWidth: 10,
    paddingTop: 32
  }
});

export default class NavigationButtonList extends React.Component {
  render() {
    return (
      <View style={styles.buttonListContainer}>
        {this.props.buttons.map(button => (
          <NavigationButton
            key={button.label}
            label={button.label}
            onPress={button.onPress}
          />
        ))}
      </View>
    );
  }
}
