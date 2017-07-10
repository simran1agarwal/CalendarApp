import React,{ Component }  from 'react';
import {
    AppRegistry, Text, View, Button, TouchableOpacity, StyleSheet, ScrollView, Alert
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

import CalendarsScreen from './screen/calendar.js';
import CalendarsListScreen from './screen/calendar_list.js';
import AgendaScreen from './screen/agenda.js';
import TimeTableScreen from './screen/time_table.js';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={ () => navigate('Menu',{option:''})}
                    title="Calendar Menu"
                />
            </View>
        );
    }
}

export class MenuScreen1 extends Component{
    static navigationOptions = {
        title: 'Calendar Menu',
    };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Button
                    onPress={() => navigate('Calendars')}
                    title="Calendars"
                />
                <Button
                    onPress={() => navigate('CalendarsList')}
                    title="Calendar List"
                />
                <Button
                    onPress={() => navigate('Agenda')}
                    title="Agenda"
                />
                <Button
                    onPress={() => navigate('TimeTable')}
                    title="Time Table"
                />
            </View>
        )
    }
}

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Menu: { screen: MenuScreen1},
    Calendars: { screen: CalendarsScreen},
    CalendarsList: {screen: CalendarsListScreen},
    TimeTable: {screen: TimeTableScreen},
    Agenda: {screen: AgendaScreen},
});

AppRegistry.registerComponent('CA', () => App);