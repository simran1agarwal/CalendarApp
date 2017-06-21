import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class CalendarsListScreen extends React.Component {
    static navigationOptions = {
        title: 'Calendar List',
    };
    render(){
            return(
                <Text>Calendars List</Text>
            );
        }
}
export default CalendarsListScreen;