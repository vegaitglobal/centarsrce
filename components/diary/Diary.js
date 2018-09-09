import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import Footer from '../footer/Footer';
import colors from '../../helpers/colors';
import styles from './styles';
import reusableStyles from '../reusableStyles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
// import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['rs'] = {
  monthNames: ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
  monthNamesShort: ['Jan.','Feb.','Mart','Apr.','Maj','Jun','Jul','Avg.','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','Cetvrtak','Petak','Subota'],
  dayNamesShort: ['ned','pon','uto','sre','cet','pet','sub']
};

LocaleConfig.defaultLocale = 'rs';

const InputLabel = ({ text }) => <Text style={styles.inputLabel}>{text}</Text>;

const Input = ({ value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Upiši ovde"
      placeholderTextColor={colors.grey}
      selectionColor={colors.darkPurple}
      underlineColorAndroid="transparent"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default class Diary extends React.Component {
  static navigationOptions = {
    title: "Moj dnevnik"
  };

  constructor(props) {
    super(props);

    let data = require('../../data/diary.json');
    let keys = [];
    for(let k in data) keys.push(k);
    let markedDates = {}
    for(let k in keys) markedDates[keys[k]] = { "customStyles": styles.markedDate };
    markedDates[moment().format('YYYY-MM-DD')] = { "customStyles": styles.markedToday };


    this.state = {
      data: data,
      markedDates: markedDates,
      selected: moment().format('YYYY-MM-DD')
    }
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    let keys = [];
    for(let k in this.state.data) keys.push(k);
    let markedDates = {}
    for(let k in keys) markedDates[keys[k]] = { "customStyles": styles.markedDate };
    markedDates[day.dateString] = { "customStyles": styles.markedToday };

    this.setState({
      markedDates: markedDates,
      selected: day.dateString
    });
  }

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
            markedDates={this.state.markedDates}
            maxDate={moment().format('YYYY-MM-DD') }

            firstDay={1}
            onDayPress={this.onDayPress}
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

          <View style={styles.inputContainer}>
            {
              (typeof this.state.data[this.state.selected] != "undefined")
              ? <Text style={styles.input}> {this.state.data[this.state.selected]} </Text>
              : <TextInput
                  style={styles.input}
                  placeholder="Upiši ovde"
                  placeholderTextColor={colors.grey}
                  selectionColor={colors.darkPurple}
                  underlineColorAndroid="transparent"
                  value={this.state.data[this.state.selected]}
                />
            }
          </View>

        </ScrollView>
        
        <Footer />

      </View>
    );
  }
}