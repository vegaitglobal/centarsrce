import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import styles from './styles';

export default class Footer extends React.Component {
    btnClicked() {
        Alert.alert("Clicked");
    }

    render() {
        return (
            <View style={styles.footerCon}>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn}
                        title = "Pozovi"
                        onPress = {this.btnClicked}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn}
                        title = "Email"
                        onPress = {this.btnClicked}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn}
                        title = "Chat"
                        onPress = {this.btnClicked}
                    />
                </View>
            </View>
        );
    }
}
