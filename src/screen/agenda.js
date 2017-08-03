import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';

class AgendaScreen extends React.Component {
    static navigationOptions = {
        title: 'Agenda',
    };
    constructor(props){
        super(props);
        this.state={language:''};
    }
    render(){
            return(
                <View>
                    <TextInput/>
                    <TextInput/>
                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            );
        }

}
export default AgendaScreen;