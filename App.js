import React from "react";
import { createStackNavigator } from "react-navigation";
import MainMenu from "./components/MainMenuComponent";
import SplashScreen from "./components/SplashScreenComponent";
import ThinkingAbout from "./components/ThinkingAbout";

const RootStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainMenu: MainMenu,
    ThinkingAbout: ThinkingAbout
  },
  {
    initialRouteName: "SplashScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#8d62a6"
      },
      headerTitleStyle: {
        color: "#ffffff"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
