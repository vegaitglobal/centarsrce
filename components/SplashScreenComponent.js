import React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainMenu from './MainMenuComponent';


export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        setInterval(() => {
          this.props.navigation.navigate('MainMenu');
      }, 5000);

    }

    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Here goes picture</Text>
            <Image source={require('../images/splash.png')} />
            
          </View>
        );
      }
}
