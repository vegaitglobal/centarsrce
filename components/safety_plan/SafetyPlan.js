import React from "react";
import { AsyncStorage, ScrollView, Text, TextInput, View } from "react-native";
import colors from "../../helpers/colors";
import styles from "./styles";

const InputLabel = ({ text }) => <Text style={styles.inputLabel}>{text}</Text>;

const Input = ({ value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Upiši ovde"
      placeholderTextColor={colors.grey}
      selectionColor={colors.darkPurple}
      underlineColorAndroid="transparent"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default class SafetyPlan extends React.Component {
  static navigationOptions = {
    title: "Moj sigurnosni plan"
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    AsyncStorage.getItem("safetyPlanState").then(stateAsString =>
      this.setState(JSON.parse(stateAsString))
    );
  }

  getInitialState() {
    return {
      one: "",
      two: "",
      three: "",
      four: "",
      five: ""
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>
          Popuni upitnik i kreiraj svoj sigurnosni plan
        </Text>
        <InputLabel text="Ako se ne osećam dobro, pričaću sa:" />
        <Input
          value={this.state.one}
          onChangeText={text => {
            this.setState({ one: text });
            AsyncStorage.setItem(
              "safetyPlanState",
              JSON.stringify({
                ...this.state,
                one: text
              })
            );
          }}
        />
        <InputLabel text="Tražiću pomoć od:" />
        <Input
          value={this.state.two}
          onChangeText={text => {
            this.setState({ two: text });
            AsyncStorage.setItem(
              "safetyPlanState",
              JSON.stringify({
                ...this.state,
                two: text
              })
            );
          }}
        />
        <InputLabel text="Smiriću se ako pokušam:" />
        <Input
          value={this.state.three}
          onChangeText={text => {
            this.setState({ three: text });
            AsyncStorage.setItem(
              "safetyPlanState",
              JSON.stringify({
                ...this.state,
                three: text
              })
            );
          }}
        />
        <InputLabel text="Moje sigurno mesto:" />
        <Input
          value={this.state.four}
          onChangeText={text => {
            this.setState({ four: text });
            AsyncStorage.setItem(
              "safetyPlanState",
              JSON.stringify({
                ...this.state,
                four: text
              })
            );
          }}
        />
        <InputLabel text="Osećaću se sigurno ako:" />
        <Input
          value={this.state.five}
          onChangeText={text => {
            this.setState({ five: text });
            AsyncStorage.setItem(
              "safetyPlanState",
              JSON.stringify({
                ...this.state,
                five: text
              })
            );
          }}
        />
      </ScrollView>
    );
  }
}
