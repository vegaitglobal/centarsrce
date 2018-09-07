import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Footer from './footer/Footer';

export default class MainMenu extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Page with buttons</Text>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Footer />
          </View>
        );
      }
}
