import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Footer from '../footer/Footer';
import styles from './styles';
import reusableStyles from '../reusableStyles';

export default class Diary extends React.Component {
  render() {
    return (
      <View style={reusableStyles.mainContainer}>
        
        <View>
          <Text style={reusableStyles.header}> Moj dnevnik </Text>
        </View>
        
        <ScrollView>
          
          <View style={reusableStyles.contentContainer}>
            <Text style={reusableStyles.title}> Zabelezi svoja osećanja i dogadjaje </Text>
            <Text style={reusableStyles.body}>
              Ovo je deo u kom mozete beleziti sve sto vam se 
              desilo u toku dana, kako ste se osecali danas, o
              cemu ste razmisljali i sta vam je pomoglo da
              pregurate ovaj dan. Na ovaj nacin mozete imati
              realniji pogled svog stanja i mozete identifikovati
              odredjena ponavljanja.
            </Text>
          </View>

          <View>
            <Text> Kalendar ce biti nova komponenta </Text>
          </View>

        </ScrollView>
        
        <Footer />

      </View>
    );
  }
}