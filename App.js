import React from "react";
import { createStackNavigator } from "react-navigation";
import About from "./components/about/About";
import Diary from "./components/diary/Diary";
import HowToHelp from "./components/how_to_help/HowToHelp";
import MainMenu from "./components/main_menu/MainMenuComponent";
import Placeholder from "./components/Placeholder";
import SafetyPlan from "./components/safety_plan/SafetyPlan";
import SplashScreen from "./components/splash_screen/SplashScreenComponent";
import ThinkingAbout from "./components/thinking_about/ThinkingAbout";

const RootStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainMenu: MainMenu,
    SafetyPlan: SafetyPlan,
    ThinkingAbout: ThinkingAbout,
    Placeholder: Placeholder,
    Diary: Diary,
    HowToHelp: HowToHelp,
    About: About
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
