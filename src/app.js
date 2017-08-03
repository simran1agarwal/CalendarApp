import React,{ Component }  from 'react';
import {
    AppRegistry, Text, View, Button, TouchableOpacity, StyleSheet, ScrollView, Alert
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

import CalendarsScreen from './screen/calendar.js';
import NewCalendarScreen from './screen/new_calendar.js';
import CalendarsListScreen from './screen/calendar_list.js';
import AgendaScreen from './screen/agenda.js';
import TimeTableRollNoScreen from './screen/time_table_roll_no.js';

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
                <View>
                    <Text>              </Text>
                </View>
                <Button
                    onPress={() => navigate('NewCalendar')}
                    title="New Calendar"
                />
                <View>
                    <Text>              </Text>
                </View>
                <Button
                    onPress={() => navigate('CalendarsList')}
                    title="Calendar List"
                />
                <View>
                    <Text>              </Text>
                </View>
                <Button
                    onPress={() => navigate('Agenda')}
                    title="Agenda"
                />
                <View>
                    <Text>              </Text>
                </View>
                <Button
                    onPress={() => navigate('TimeTableRollNo')}
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
    NewCalendar: { screen: NewCalendarScreen},
    CalendarsList: {screen: CalendarsListScreen},
    TimeTableRollNo: {screen: TimeTableRollNoScreen},
    Agenda: {screen: AgendaScreen},
});

AppRegistry.registerComponent('CA', () => App);