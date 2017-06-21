import React,{ Component }  from 'react';
import {
  AppRegistry,
  Text,View,Button,TouchableOpacity, StyleSheet, ScrollView,Alert
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import App2 from './screen/menu.js';
import CalendarsScreen from './screen/calendar.js';
import CalendarsListScreen from './screen/calendar_list.js';
import AgendaScreen from './screen/agenda.js';


export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> Hello ChatApp</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />

                <Button
                    onPress={ () => navigate('Menu',{option:''})}
                    title="Calendar Menu"
                />
            </View>
        );
    }
}
class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
/*export class MenuScreen1 extends Component{
    *static navigationOptions = {
     *   title: 'Calendar Menu',
    *};
    *render(){
     *   const { navigate } = this.props.navigation;
      *  return(
       *     <App2 />
        *)
    *}
*}
*/
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
            </View>
        )
    }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  calendar: {
          borderTopWidth: 1,
          paddingTop: 5,
          borderBottomWidth: 1,
          borderColor: '#eee',
          height: 350
        },
        text: {
          textAlign: 'center',
          borderColor: '#bbb',
          padding: 10,
          backgroundColor: '#eee'
        },
        container: {
          flex: 1,
          backgroundColor: 'gray'
        },
        menu: {
          height: 50,
          justifyContent: 'center',
          paddingLeft: 15,
          borderBottomWidth: 1
        },
        menuText: {
          fontSize: 18
        }
});

const App = StackNavigator({

    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
    Menu: { screen: MenuScreen1},
    Calendars: { screen: CalendarsScreen},
    CalendarsList: {screen: CalendarsListScreen},
    Agenda: {screen: AgendaScreen},
});

AppRegistry.registerComponent('CA', () => App);