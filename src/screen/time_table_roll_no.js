import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  TextInput,
  Picker,
  Button,
} from 'react-native';

import TimeTableScreen from './time_table.js';
import { StackNavigator, } from 'react-navigation';

class  TimeTableRollNoScreen1 extends React.Component {
    static navigationOptions = {
        title: ' TimeTableRollNoScreen',
    };
    constructor(props){
        super(props);
        this.state={myDepartment:'ce',myYear:'one'};
    }
    render(){
        const { navigate } = this.props.navigation;
            return(
                <View>
                    <Text>Select Department</Text>
                    <Picker
                        selectedValue={this.state.myDepartment}
                        onValueChange={(itemValue, itemIndex) => this.setState({myDepartment: itemValue})}>
                        <Picker.Item label="CE" value="ce" />
                        <Picker.Item label="CL" value="cl" />
                        <Picker.Item label="CSE" value="cse" />
                        <Picker.Item label="CST" value="cst" />
                        <Picker.Item label="BT" value="bt" />
                        <Picker.Item label="ECE" value="ece" />
                        <Picker.Item label="EEE" value="eee" />
                        <Picker.Item label="EP" value="ep" />
                        <Picker.Item label="MA & C" value="ma" />
                        <Picker.Item label="ME" value="me" />
                        <Picker.Item label="Design" value="design" />
                    </Picker>
                    <Text>Select Year</Text>
                    <Picker
                        selectedValue={this.state.myYear}
                        onValueChange={(itemValue, itemIndex) => this.setState({myYear: itemValue})}>
                        <Picker.Item label="1st Year" value="one" />
                        <Picker.Item label="2nd Year" value="two" />
                        <Picker.Item label="3rd Year" value="three" />
                        <Picker.Item label="4th Year" value="four" />
                    </Picker>
                    <Text>
                        {this.state.myDepartment} {this.state.myYear}
                    </Text>
                    <Button
                        onPress={() => navigate('TimeTable',{myDepartment:this.state.myDepartment, myYear:this.state.myYear})}
                        title = "Continue"/>
                </View>
            );
        }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    saved:{},
    formInput:{

        width:200,
    }
});
const TimeTableRollNoScreen = StackNavigator({
    TimeTableRollNoScreen_ : {screen: TimeTableRollNoScreen1},
    TimeTable: {screen: TimeTableScreen},
    },
    {headerMode:'none'}
);
export default  TimeTableRollNoScreen;