import React, {Component} from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, ScrollView,FlatList,SectionList,ListView,
} from 'react-native';
import Moment from 'moment';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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
                                    <View>
                                        {item.titleh}
                                        {item.titled}
                                    </View>

                                </View>

                        }

                    />
            </View>
        );
    }
    selectionList = () => {
        var dateList = [];
        var j=0;
        var k= 30;
        /*for(i=1;i<10;i++){
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
        }*/
        var weekdayList = [];
        var weekday = [];
        const tableHead = ['S','M', 'T', 'W', 'T','F','S'];
        const tableData = [
            ['1', '2', '3', '4','5','6','7'],
            ['8','9','10','11','12','13','14'],
            ['15','16','17','18','19','20','21'],
            ['22','23','24','25','26','27','28'],
            ['29','30','31','','','',''],
        ];
        /*weekdayList.push(
            <Text style={styles.weekdayContainer}>
                <Text style={styles.dayText}>S</Text>
                <Text style={styles.dayText}>M</Text>
                <Text style={styles.dayText}>T</Text>
                <Text style={styles.dayText}>W</Text>
                <Text style={styles.dayText}>T</Text>
                <Text style={styles.dayText}>F</Text>
                <Text style={styles.dayText}>S</Text>
            </Text>
        );*/
        weekdayList.push(
            <Table>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            </Table>
        );
        dateList.push(
            <Table>
                 <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
            </Table>
                );
        weekday.push(

                <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                </Table>

        )
        var month0 = Moment().add(0, 'months').format('MMMM YYYY');
        var month1 = Moment().add(1, 'months').format('MMMM YYYY');
        var month2 = Moment().add(2, 'months').format('MMMM YYYY');
        var month3 = Moment().add(3, 'months').format('MMMM YYYY');
        var month4 = Moment().add(4, 'months').format('MMMM YYYY');
        var month5 = Moment().add(5, 'months').format('MMMM YYYY');
        var month6 = Moment().add(6, 'months').format('MMMM YYYY');
        var month7 = Moment().add(7, 'months').format('MMMM YYYY');
        var month8 = Moment().add(8, 'months').format('MMMM YYYY');
        var month9 = Moment().add(9, 'months').format('MMMM YYYY');
        var month10 = Moment().add(10, 'months').format('MMMM YYYY');
        var month11 = Moment().add(11, 'months').format('MMMM YYYY');
        var month12 = Moment().add(12, 'months').format('MMMM YYYY');
        var month13 = Moment().add(13, 'months').format('MMMM YYYY');
        var month14 = Moment().add(14, 'months').format('MMMM YYYY');
        var month15= Moment().add(15, 'months').format('MMMM YYYY');
        var month16 = Moment().add(16, 'months').format('MMMM YYYY');



        return([
            {data: [{titleh:weekdayList},{titled:dateList}],key: month0},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month1},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month2},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month3},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month4},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month5},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month6},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month7},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month8},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month9},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month10},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month11},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month12},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month13},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month14},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month15},
            {data: [{titleh:weekdayList},{titled:dateList}],key: month16},



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
        alignContent:'center',
        justifyContent:'center',

        borderColor:'red',
        borderWidth:4,
    },
    weekdayContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',

        borderColor:'blue',
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
    head: { width:340, height: 30, backgroundColor: 'yellow', },
      text: { marginLeft: 5 },
      row: { flex:1, width:340, height: 30, backgroundColor:'green' }

});

export default CalendarsScreen;