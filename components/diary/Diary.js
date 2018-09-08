import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Footer from '../footer/Footer';
import colors from '../../helpers/colors';
import styles from './styles';
import reusableStyles from '../reusableStyles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
// import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['rs'] = {
  monthNames: ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
  monthNamesShort: ['Jan.','Feb.','Mart','Apr.','Maj','Jun','Jul','Avg.','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','Cetvrtak','Petak','Subota'],
  dayNamesShort: ['ned','pon','uto','sre','cet','pet','sub']
};

LocaleConfig.defaultLocale = 'rs';


export default class Diary extends React.Component {
  static navigationOptions = {
    title: "Moj dnevnik"
  };
  render() {
    return (
      <View style={reusableStyles.mainContainer}>
        
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

          <Calendar
            markingType={'custom'}
            markedDates={{
              '2018-09-03': { customStyles: styles.markedDate },
              '2018-09-05': { customStyles: styles.markedDate },
              '2018-09-06': { customStyles: styles.markedDate },
              '2018-09-08': { customStyles: styles.markedToday },
            }}
            firstDay={1}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: colors.darkPurple,
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: colors.darkPurple,
              selectedDotColor: '#ffffff',
              arrowColor: colors.darkPurple,
              monthTextColor: colors.darkPurple,
              textMonthFontWeight: 'bold',
            }}
          />

        </ScrollView>
        
        <Footer />

      </View>
    );
  }
}