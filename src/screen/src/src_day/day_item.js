import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export class DayItem extends Component {
    render(){
        return(
            <Text style={this.style()}> {this.props.day} </Text>

        );
    }

    style(){
        return {
            color: this.color(),
            fontSize: this.fontSize(),
            fontWeight: this.fontWeight(),
            lineHeight: this.lineHeight(),
        }
    }

    color(){

        return 'rgba(0,0,0,1) ';
    }

    fontSize(){
        return 20;
    }
    fontWeight(){

        return '100';
    }
    lineHeight(){
        return 30;
    }
}


module.exports = DayItem;