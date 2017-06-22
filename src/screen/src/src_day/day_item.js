import React, {Component} from 'react';
import {Text, StyleSheet,TouchableHighlight,Alert} from 'react-native';

export class DayItem extends Component {
    render(){
        return(
            <TouchableHighlight underlayColor="gray" onPress={this._onPressDate}>
                <Text style={styles.dayText}> {this.props.day} </Text>
            </TouchableHighlight>
        );
    }
    _onPressDate(){

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