import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
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
        var month;
        var j = this.props.monthsUntil;
        var month = Moment().add(j, 'months').format('MMMM');

        if ((month=='January')||(month=='March')||(month=='May')||(month=='July')||(month=='August')||(month=='October')||(month=='December')){
            for(i=0;i<31;i++){
                var a = Moment('2016-01-01');
                var day = a.clone().add(i, 'days').format('DD');
                    daysItem.push(
                    <DayItem key={i} day={day} daysUntil={i} />
                    )
            }
        }
        else if ((month=='April')||(month=='June')||(month=='September')||(month=='November')){
            for(i=0;i<30;i++){
                var b = Moment('2016-04-01');
                    var day = b.clone().add(i, 'days').format('DD');
                        daysItem.push(
                            <DayItem key={i} day={day} daysUntil={i} />
                        )
            }
        }
        else if (month=='February'){
            var c = Moment().format('YY');
            if(c%4==0){
                n=29;
            }
            else{
                n=28;
            }
            for(i=0;i<n;i++){
                var d = Moment('2016-04-01');
                    var day = d.clone().add(i, 'days').format('DD');
                        daysItem.push(
                            <DayItem key={i} day={day} daysUntil={i} />
                        )
            }
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