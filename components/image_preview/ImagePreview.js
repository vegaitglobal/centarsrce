import React from "react";
import { Image, ToastAndroid, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class ImagePreview extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => ToastAndroid.show("Hi human!", ToastAndroid.SHORT)}
      >
        <Image style={styles.img} source={require(this.props.src)} />
      </TouchableOpacity>
    );
  }
}
