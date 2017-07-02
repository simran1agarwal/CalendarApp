import React, {Component} from 'react';
import {Text, StyleSheet,TouchableHighlight,Alert} from 'react-native';
import Moment from 'moment';

export class DayItem extends Component {
    render(){
        return(
            <TouchableHighlight underlayColor="gray" onPress={this._onPressDate}>
                <Text style={[styles.dayText,this.style()]}> {this.props.day} </Text>
            </TouchableHighlight>
        );
    }
    _onPressDate(){


    }
    style(){
        return{
//            paddingLeft: 10*this.props.spaces
        }

    }
}

const styles = StyleSheet.create ({
    dayText: {
        fontSize:15,
        fontFamily: 'Calibiri',
        padding:10,

    }
});

module.exports = DayItem;