import React from "react";
import { createStackNavigator } from "react-navigation";
import About from "./components/about/About";
import Camera from "./components/camera/Camera";
import Diary from "./components/diary/Diary";
import HelpMyself from "./components/help_myself/HelpMyself";
import HowToHelp from "./components/how_to_help/HowToHelp";
import MainMenu from "./components/main_menu/MainMenuComponent";
import MyFiles from "./components/my_files/MyFiles";
import Pandemic from "./components/pandemic/Pandemic";
import Placeholder from "./components/Placeholder";
import PsychoManual from "./components/psycho_manual/PsychoManual";
import SafetyPlan from "./components/safety_plan/SafetyPlan";
import SplashScreen from "./components/splash_screen/SplashScreenComponent";
import SuicideMyths from "./components/suicide_myths/SuicideMyths";
import Support from "./components/support/Support";
import SupportManual from "./components/support_manual/SupportManual";
import ThinkingAbout from "./components/thinking_about/ThinkingAbout";
import ValInfo from "./components/val_info/ValuableInfo";
import WarnSigns from "./components/warn_signs/WarnSigns";
import colors from "./helpers/colors";
import { normalize } from "./helpers/sizes";

const RootStack = createStackNavigator(
  {
    Camera: Camera,
    SplashScreen: SplashScreen,
    MainMenu: MainMenu,
    SafetyPlan: SafetyPlan,
    ThinkingAbout: ThinkingAbout,
    Placeholder: Placeholder,
    Diary: Diary,
    HowToHelp: HowToHelp,
    Pandemic: Pandemic,
    About: About,
    MyFiles: MyFiles,
    HelpMyself: HelpMyself,
    PsychoManual: PsychoManual,
    WarnSigns: WarnSigns,
    SupportManual: SupportManual,
    Support: Support,
    SuicideMyths: SuicideMyths,
    ValInfo: ValInfo
  },
  {
    initialRouteName: "SplashScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#8d62a6"
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontSize: normalize(16),
        fontWeight: "500"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
