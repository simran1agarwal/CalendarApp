import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Moment from 'moment';
import MonthItem from './src/month_item.js';

class CalendarsScreen extends React.Component {
    static navigationOptions = {
        title: 'Calendars',
    };
    render(){
        return(
            <View>
                <Text>Calendars</Text>
                {this.months()}
            </View>
        );
    }
    months(){
        var monthsItem = [];
        for(i=0;i<12;i++){
           var month = Moment().add(i, 'months').format('MMMM YYYY');
           monthsItem.push(
            <MonthItem key={i} month={month} monthsUntil={i} />
           )
        }

        return monthsItem
      }
}
export default CalendarsScreen;