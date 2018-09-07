import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from './components/SplashScreenComponent';
import MainMenu from './components/MainMenuComponent';
import ThinkingAbout from "./components/ThinkingAbout";

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}

const RootStack = createStackNavigator(
  {
    Home: SplashScreen,
    MainMenu: MainMenu,
    ThinkingAbout: ThinkingAbout
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
