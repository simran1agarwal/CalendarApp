import React, {Component} from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, ScrollView,FlatList,SectionList,ListView,
} from 'react-native';
import Moment from 'moment';

import MonthItem from './src/month_item.js';

class CalendarsScreen extends React.Component {
    static navigationOptions = {
        title: 'Calendars',
    };
    render(){
        return(
            <View style={styles.container}>
                    <SectionList

                        sections={this.selectionList()}
                        renderSectionHeader={({section}) =><View style={styles.header}><Text style={styles.monthText}>{section.key}</Text></View>}
                        renderItem={
                            ({item}) =>
                                <View style={styles.footer}>
                                    <Text>{item.title}</Text>
                                </View>
                        }

                    />
            </View>
        );
    }
    selectionList = () => {
        var dateList = [];
        var j=0;
        if(){
            var k=31;
        }
        else var k= 30;
        for(i=1;i<10;i++){
            dateList.push(
                <Text style={styles.dayContainer}>
                    <Text key={i} style={styles.dayText}>0{i}          </Text>
                </Text>
            );
        }
        for(i=10;i<=k;i++){
             dateList.push(
                 <Text style={styles.dayContainer}>
                     <Text key={i} style={styles.dayText}>{i}          </Text>
                 </Text>
             );
        }
        var weekdayList = [];

        weekdayList.push(
            <Text style={styles.weekdayContainer}>
                <Text style={styles.dayText}>S            </Text>
                <Text style={styles.dayText}>M            </Text>
                <Text style={styles.dayText}>T            </Text>
                <Text style={styles.dayText}>W            </Text>
                <Text style={styles.dayText}>T            </Text>
                <Text style={styles.dayText}>F            </Text>
                <Text style={styles.dayText}>S            </Text>
            </Text>
        );

        return([
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(0, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(1, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(2, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(3, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(4, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(5, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(6, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(7, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(8, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(9, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(10, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(11, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(12, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(13, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(14, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(15, 'months').format('MMMM YYYY')},
            {data: [{title:weekdayList},{title:dateList}],key: Moment().add(16, 'months').format('MMMM YYYY')},



        ])
     }
    months(){
        var monthsItem = [];
        for(i=0;i<12;i++){
            var month = Moment().add(i, 'months').format('MMMM YYYY');
            monthsItem.push(
                <MonthItem key={i} month={month} monthsUntil={i} />
            )
        }
        return monthsItem;
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'stretch',

        borderColor:'blue',
        borderWidth:4,

    },
    header:{
        flex:1,

        borderColor:'green',
        borderWidth:4,
    },
    footer:{
        flex:5,
        flexDirection:'row',


        borderColor:'red',
        borderWidth:4,
    },
    weekdayContainer:{
        flex:1,
        flexDirection:'row',

        borderColor:'blue',
        backgroundColor:'yellow',
        borderWidth:4,
    },
    monthText: {
        fontSize:25,
        fontFamily:'Calibiri',
    },
    dayContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
        alignContent:'stretch',

        borderColor:'blue',
        backgroundColor:'yellow',
        borderWidth:4,
    },
    dayText: {

        fontSize:15,
        fontFamily:'Calibiri',
    },

});

export default CalendarsScreen;