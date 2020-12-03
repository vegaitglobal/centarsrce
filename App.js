import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from './components/about/About';
import Camera from './components/camera/Camera';
import Diary from './components/diary/Diary';
import HelpMyself from './components/help_myself/HelpMyself';
import HowToHelp from './components/how_to_help/HowToHelp';
import MainMenu from './components/main_menu/MainMenuComponent';
import MyFiles from './components/my_files/MyFiles';
import Pandemic from './components/pandemic/Pandemic';
import PsychoManual from './components/psycho_manual/PsychoManual';
import SafetyPlan from './components/safety_plan/SafetyPlan';
import SplashScreen from './components/splash_screen/SplashScreenComponent';
import SuicideMyths from './components/suicide_myths/SuicideMyths';
import Support from './components/support/Support';
import SupportManual from './components/support_manual/SupportManual';
import ThinkingAbout from './components/thinking_about/ThinkingAbout';
import ValInfo from './components/val_info/ValuableInfo';
import WarnSigns from './components/warn_signs/WarnSigns';
import colors from './helpers/colors';
import { normalize } from './helpers/sizes';
import Logo from './images/logo.png';
import { Image } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8d62a6',
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontSize: normalize(16),
            fontWeight: '500',
          },
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Camera"
          options={{ title: 'Kamera' }}
          component={Camera}
        />
        <Stack.Screen
          name="ValInfo"
          options={{ title: 'Značajne informacije' }}
          component={ValInfo}
        />
        <Stack.Screen
          name="SuicideMyths"
          options={{ title: 'Mitovi o samoubistvu' }}
          component={SuicideMyths}
        />
        <Stack.Screen
          name="Support"
          options={{ title: 'Podrška' }}
          component={Support}
        />
        <Stack.Screen
          name="SupportManual"
          options={{ title: 'Priručnik podrške' }}
          component={SupportManual}
        />
        <Stack.Screen
          name="WarnSigns"
          component={WarnSigns}
          options={{ title: 'Znaci upozorenja' }}
        />
        <Stack.Screen
          name="PsychoManual"
          options={{ title: 'Psihološki priručnik' }}
          component={PsychoManual}
        />
        <Stack.Screen
          name="HelpMyself"
          options={{ title: 'Kako da pomognem sebi sada?' }}
          component={HelpMyself}
        />
        <Stack.Screen
          name="MyFiles"
          options={{ title: 'Moj spomenar' }}
          component={MyFiles}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'O udruženju i o aplikaciji' }}
        />
        <Stack.Screen
          name="Pandemic"
          component={Pandemic}
          options={{ title: 'Mentalno zdravlje u vreme pandemije COVID-19' }}
        />
        <Stack.Screen
          name="HowToHelp"
          component={HowToHelp}
          options={{ title: 'Kako pomoći?' }}
        />
        <Stack.Screen
          name="Diary"
          component={Diary}
          options={{ title: 'Moj dnevnik' }}
        />
        <Stack.Screen
          name="ThinkingAbout"
          component={ThinkingAbout}
          options={{ title: 'Razmišljaš o samoubistvu?' }}
        />
        <Stack.Screen
          name="SafetyPlan"
          component={SafetyPlan}
          options={{ title: 'Moj sigurnosni plan' }}
        />
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{
            headerLeft: null,
            headerTitle: () => (
              <Image
                style={{ marginLeft: 20, width: 122, height: 35 }}
                source={Logo}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
