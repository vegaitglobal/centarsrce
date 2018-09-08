import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import colors from "../../helpers/colors";
import styles from "./styles";

const InputLabel = ({ text }) => <Text style={styles.inputLabel}>{text}</Text>;

const Input = () => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Upiši ovde"
      placeholderTextColor={colors.grey}
      selectionColor={colors.darkPurple}
      underlineColorAndroid="transparent"
    />
  </View>
);

export default class Placeholder extends React.Component {
  static navigationOptions = {
    title: "Moj sigurnosni plan"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>
          Popuni upitnik i kreiraj svoj sigurnosni plan
        </Text>
        <InputLabel text="Ako se ne osećam dobro, pričaću sa:" />
        <Input />
        <InputLabel text="Tražiću pomoć od:" />
        <Input />
        <InputLabel text="Smiriću se ako pokušam:" />
        <Input />
        <InputLabel text="Moje sigurno mesto:" />
        <Input />
        <InputLabel text="Osećaću se sigurno ako:" />
        <Input />
      </ScrollView>
    );
  }
}
