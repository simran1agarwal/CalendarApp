import React, {Component} from 'react';
import {Text, StyleSheet,TouchableHighlight,Alert,View} from 'react-native';
import { StackNavigator, } from 'react-navigation';

import CalendarsScreen from './screen/calendar.js';

import AgendaScreen from './screen/agenda.js';

export class HomeScreen extends Component {
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
                    onPress={() => navigate('Agenda')}
                    title="Agenda"
                />
            </View>
        )
    }
}

const App3 = StackNavigator({
    Home: { screen: HomeScreen },
    Menu: { screen: MenuScreen1},
    Calendars: { screen: CalendarsScreen},

    Agenda: {screen: AgendaScreen},
});

module.exports = App3;