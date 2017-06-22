import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import Moment from 'moment';

import DayItem from './src_day/day_item.js';

export class MonthItem extends Component {
    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.monthText}>
                {this.props.month}
            </Text>
            <View style={styles.weekdayContainer} >
                {this.weekday()}
            </View>
            <View style={styles.dayContainer} >
                {this.days()}
            </View>
        </View>
        );
    }
    weekday(){
        return(
        <View style={styles.weekdayContainer} >
            <Text style={styles.dayText}>S</Text>
            <Text style={styles.dayText}>M</Text>
            <Text style={styles.dayText}>T</Text>
            <Text style={styles.dayText}>W</Text>
            <Text style={styles.dayText}>T</Text>
            <Text style={styles.dayText}>F</Text>
            <Text style={styles.dayText}>S</Text>
        </View>);
    }
    days(){
        var daysItem = [];
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
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
    },
    monthText: {
        fontSize:25,
        fontFamily:'Calibiri',
        backgroundColor:'rgba(100,255,100,0.25)',
        flex:1,
        padding:10,
    },
    dayContainer:{
        flex:5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor:'rgba(255,255,0,0.25)',
        flexWrap:'wrap',
        padding:10,
        alignContent:'center',
        paddingLeft:22,
    },
    weekdayContainer:{
            flex:1,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor:'rgba(255,255,0,0.125)',
            alignContent:'center',

        },
    dayText: {
        fontSize:17,
        fontFamily: 'Calibiri',
        padding:17,
    },
});

module.exports = MonthItem;