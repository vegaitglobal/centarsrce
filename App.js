import React from "react";
import { createStackNavigator } from "react-navigation";
import MainMenu from "./components/main_menu/MainMenuComponent";
import Placeholder from "./components/Placeholder";
import SplashScreen from "./components/splash_screen/SplashScreenComponent";
import ThinkingAbout from "./components/thinking_about/ThinkingAbout";

const RootStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainMenu: MainMenu,
    ThinkingAbout: ThinkingAbout,
    Placeholder: Placeholder
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
