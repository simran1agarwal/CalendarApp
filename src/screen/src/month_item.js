import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import DayItem from './src_day/day_item.js';
import Moment from 'moment';

export class MonthItem extends Component {
    render(){
        return(
        <View>
            <Text style={this.style()}> {this.props.month} </Text>
            {this.days()}
        </View>
        );
    }
    days(){
            var daysItem = [];
            for(i=0;i<30;i++){
               var day1 = Moment().format('DD');
               var day = Moment().subtract(day1-i-1, 'days').format('DD');

               daysItem.push(
                <DayItem key={i} day={day} daysUntil={i} />
               )
            }

            return daysItem
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
        return 40;
    }
}


module.exports = MonthItem;