import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require('../../images/call.png')} style={styles.navIcon}/>
            <Text> Call </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/mail.png')} style={styles.navIcon}/>
            <Text> Email </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../images/chat.png')} style={styles.navIcon}/>
            <Text> Chat </Text>
        </TouchableOpacity>
      </View>
    );
  }
}