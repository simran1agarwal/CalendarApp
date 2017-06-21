import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

export class MenuScreen2 extends Component {
    static navigationOptions = {
            title: 'Welcome',
        };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
            <Button
                onPress={() => navigate('Chat')}
                title="Chat with Lucy"
            />

            <Button
                onPress={() => navigate('Chat')}
                title="Chat with Lucy"
             />
            <Button
                onPress={() => navigate('Chat')}
                title="Chat with Lucy"
            />
        </View>
    );
  }
}
class ChatScreen2 extends React.Component {
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
const App2 = StackNavigator({

    Home: { screen: MenuScreen2},
    Chat: { screen: ChatScreen2 },

    /*Calendars: { screen: CalendarsScreen},
    CalendarsList: {screen: CalendarsListScreen},
    Agenda: {screen: AgendaScreen},*/
});
export default App2