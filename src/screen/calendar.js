import React, {Component} from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, ScrollView,FlatList,SectionList,ListView,Alert,Button,
} from 'react-native';
import Moment from 'moment';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { StackNavigator } from 'react-navigation';
//npm install react-native-simple-table --save

//import MonthItem from './src/month_item.js';

class CalendarsScreen1 extends React.Component {
    static navigationOptions = {
        title: 'Calendars',
    };
    render(){
        return(
            <View style={styles.container}>
                    <SectionList
                        sections={this.selectionList()}
                        renderSectionHeader={
                            ({section}) =>
                                <View style={styles.header}>
                                    <Text style={styles.monthText}>{section.key}</Text>
                                </View>
                        }
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
        const { navigate } = this.props.navigation;

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
        var j=0;
        var k= 30;
        var month = [];
        var year = [];
        var dateList = [];
        var weekdayList = [];
        var weekday = [];
        var monthArr = [];
        var tableData = [];
        for(i=0;i<16;i++){
            monthArr[i]=Moment().add(i, 'months').format('MMM');
            month[i]=Moment().add(i, 'months').format('MMMM YYYY');
            //Alert.alert(monthArr[i]);
        }
        for(i=0;i<16;i++){
            if((monthArr[i]=='Jan')||(monthArr[i]=='Mar')||(monthArr[i]=='May')||(monthArr[i]=='Jul')||(monthArr[i]=='Aug')||(monthArr[i]=='Oct')||(monthArr[i]=='Dec')){
                //Alert.alert('31');


                date = String(Moment().add(i,'months').format('DD'));
                date1 = String(Moment().add(i,'months').subtract(date-1,'days').format('DD'));
                weekday = String(Moment().add(i,'months').subtract(date-1,'days').weekday());
                //Alert.alert(weekday);
                //Alert.alert(date1);
                if(weekday==0){
                    tableData[i] = [
                        ['1', '2', '3', '4','5','6','7'],
                        ['8','9','10','11','12','13','14'],
                        ['15','16','17','18','19','20','21'],
                        ['22','23','24','25','26','27','28'],
                        ['29','30','31','','','',''],
                    ];
                }
                else if(weekday==1){
                    tableData[i] = [
                        ['','1', '2', '3', '4','5','6'],
                        ['7','8','9','10','11','12','13'],
                        ['14','15','16','17','18','19','20'],
                        ['21','22','23','24','25','26','27'],
                        ['28','29','30','31','','',''],
                    ];
                }
                else if(weekday==2){
                    tableData[i] = [
                        ['','','1', '2', '3', '4','5'],
                        ['6','7','8','9','10','11','12'],
                        ['13','14','15','16','17','18','19'],
                        ['20','21','22','23','24','25','26'],
                        ['27','28','29','30','31','',''],
                    ];
                }
                else if(weekday==3){
                    tableData[i] = [
                        ['','','','1', '2', '3', '4'],
                        ['5','6','7','8','9','10','11'],
                        ['12','13','14','15','16','17','18'],
                        ['19','20','21','22','23','24','25'],
                        ['26','27','28','29','30','31',''],
                    ];
                }
                else if(weekday==4){
                    tableData[i] = [
                        ['','','','','1', '2', '3'],
                        [ '4','5','6','7','8','9','10'],
                        ['11','12','13','14','15','16','17'],
                        ['18','19','20','21','22','23','24'],
                        ['25','26','27','28','29','30','31'],
                    ];
                }
                else if(weekday==5){
                    tableData[i] = [
                        ['','','','','','1', '2'],
                        [ '3', '4','5','6','7','8','9'],
                        ['10','11','12','13','14','15','16'],
                        ['17','18','19','20','21','22','23'],
                        ['24','25','26','27','28','29','30'],
                        ['31','','','','','','']
                    ];
                }
                else if(weekday==6){
                    tableData[i] = [
                        ['','','','','','','1'],
                        [ '2', '3', '4','5','6','7','8'],
                        ['9','10','11','12','13','14','15'],
                        ['16','17','18','19','20','21','22'],
                        [,'23','24','25','26','27','28','29'],
                        ['30','31','','','','',''],
                    ];
                }
            }
            else if((monthArr[i]=='Apr')||(monthArr[i]=='Jun')||(monthArr[i]=='Sep')||(monthArr[i]=='Nov')){
                //Alert.alert('30');
                date = String(Moment().add(i,'months').format('DD'));
                date1 = String(Moment().add(i,'months').subtract(date-1,'days').format('DD'));
                weekday = String(Moment().add(i,'months').subtract(date-1,'days').weekday());
                //Alert.alert(weekday);
                //Alert.alert(date1);
                if(weekday==0){
                    tableData[i] = [
                        ['1', '2', '3', '4','5','6','7'],
                        ['8','9','10','11','12','13','14'],
                        ['15','16','17','18','19','20','21'],
                        ['22','23','24','25','26','27','28'],
                        ['29','30','','','','',''],
                    ];
                }
                else if(weekday==1){
                    tableData[i] = [
                        ['','1', '2', '3', '4','5','6'],
                        ['7','8','9','10','11','12','13'],
                        ['14','15','16','17','18','19','20'],
                        ['21','22','23','24','25','26','27'],
                        ['28','29','30','','','',''],
                    ];
                }
                else if(weekday==2){
                    tableData[i] = [
                        ['','','1', '2', '3', '4','5'],
                        ['6','7','8','9','10','11','12'],
                        ['13','14','15','16','17','18','19'],
                        ['20','21','22','23','24','25','26'],
                        ['27','28','29','30','','',''],
                    ];
                }
                else if(weekday==3){
                    tableData[i] = [
                        ['','','','1', '2', '3', '4'],
                        ['5','6','7','8','9','10','11'],
                        ['12','13','14','15','16','17','18'],
                        ['19','20','21','22','23','24','25'],
                        ['26','27','28','29','30','',''],
                    ];
                }
                else if(weekday==4){
                    tableData[i] = [
                        ['','','','','1', '2', '3'],
                        [ '4','5','6','7','8','9','10'],
                        ['11','12','13','14','15','16','17'],
                        ['18','19','20','21','22','23','24'],
                        ['25','26','27','28','29','30',''],
                    ];
                }
                else if(weekday==5){
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!')
                        }}
                        title="title"
                     />

                    tableData[i] = [
                        ['','','','','','1', '2'],
                        [ '3', '4','5','6','7','8','9'],
                        ['10','11','12','13','14','15','16'],
                        ['17','18','19','20','21','22','23'],
                        ['24','25','26','27','28','29','30'],
                    ];

                }
                else if(weekday==6){
                    tableData[i] = [
                        ['','','','','','','1'],
                        [ '2', '3', '4','5','6','7','8'],
                        ['9','10','11','12','13','14','15'],
                        ['16','17','18','19','20','21','22'],
                        [,'23','24','25','26','27','28','29'],
                        ['30','','','','','',''],
                    ];
                }
            }
            else if(monthArr[i]=='Feb'){
                //Alert.alert('28');
                year = Moment().add(i,'months').format('YYYY');
                date = String(Moment().add(i,'months').format('DD'));
                date1 = String(Moment().add(i,'months').subtract(date-1,'days').format('DD'));
                weekday = String(Moment().add(i,'months').subtract(date-1,'days').weekday());
                //Alert.alert(weekday);
                //Alert.alert(date1);

                if((year%4)==0){
                 if(weekday==0){
                     tableData[i] = [
                         ['1', '2', '3', '4','5','6','7'],
                         ['8','9','10','11','12','13','14'],
                         ['15','16','17','18','19','20','21'],
                         ['22','23','24','25','26','27','28'],
                         ['29','','','','','','']
                     ];
                 }
                 else if(weekday==1){
                     tableData[i] = [
                         ['','1', '2', '3', '4','5','6'],
                         ['7','8','9','10','11','12','13'],
                         ['14','15','16','17','18','19','20'],
                         ['21','22','23','24','25','26','27'],
                         ['28','29','','','','',''],
                     ];
                 }
                 else if(weekday==2){
                     tableData[i] = [
                         ['','','1', '2', '3', '4','5'],
                         ['6','7','8','9','10','11','12'],
                         ['13','14','15','16','17','18','19'],
                         ['20','21','22','23','24','25','26'],
                         ['27','28','29','','','',''],
                     ];
                 }
                 else if(weekday==3){
                     tableData[i] = [
                         ['','','','1', '2', '3', '4'],
                         ['5','6','7','8','9','10','11'],
                         ['12','13','14','15','16','17','18'],
                         ['19','20','21','22','23','24','25'],
                         ['26','27','28','29','','',''],
                     ];
                 }
                 else if(weekday==4){
                     tableData[i] = [
                         ['','','','','1', '2', '3'],
                         [ '4','5','6','7','8','9','10'],
                         ['11','12','13','14','15','16','17'],
                         ['18','19','20','21','22','23','24'],
                         ['25','26','27','28','29','',''],
                     ];
                 }
                 else if(weekday==5){
                     tableData[i] = [
                         ['','','','','','1', '2'],
                         [ '3', '4','5','6','7','8','9'],
                         ['10','11','12','13','14','15','16'],
                         ['17','18','19','20','21','22','23'],
                         ['24','25','26','27','28','29',''],
                     ];
                 }
                 else if(weekday==6){
                     tableData[i] = [
                         ['','','','','','','1'],
                         [ '2', '3', '4','5','6','7','8'],
                         ['9','10','11','12','13','14','15'],
                         ['16','17','18','19','20','21','22'],
                         [,'23','24','25','26','27','28','29'],
                     ];
                 }
                }
                else{
                if(weekday==0){
                     tableData[i] = [
                         ['1', '2', '3', '4','5','6','7'],
                         ['8','9','10','11','12','13','14'],
                         ['15','16','17','18','19','20','21'],
                         ['22','23','24','25','26','27','28'],
                     ];
                 }
                 else if(weekday==1){
                     tableData[i] = [
                         ['','1', '2', '3', '4','5','6'],
                         ['7','8','9','10','11','12','13'],
                         ['14','15','16','17','18','19','20'],
                         ['21','22','23','24','25','26','27'],
                         ['28','','','','','',''],
                     ];
                 }
                 else if(weekday==2){
                     tableData[i] = [
                         ['','','1', '2', '3', '4','5'],
                         ['6','7','8','9','10','11','12'],
                         ['13','14','15','16','17','18','19'],
                         ['20','21','22','23','24','25','26'],
                         ['27','28','','','','',''],
                     ];
                 }
                 else if(weekday==3){
                     tableData[i] = [
                         ['','','','1', '2', '3', '4'],
                         ['5','6','7','8','9','10','11'],
                         ['12','13','14','15','16','17','18'],
                         ['19','20','21','22','23','24','25'],
                         ['26','27','28','','','',''],
                     ];
                 }
                 else if(weekday==4){
                     tableData[i] = [
                         ['','','','','1', '2', '3'],
                         [ '4','5','6','7','8','9','10'],
                         ['11','12','13','14','15','16','17'],
                         ['18','19','20','21','22','23','24'],
                         ['25','26','27','28','','',''],
                     ];
                 }
                 else if(weekday==5){
                     tableData[i] = [
                         ['','','','','','1', '2'],
                         [ '3', '4','5','6','7','8','9'],
                         ['10','11','12','13','14','15','16'],
                         ['17','18','19','20','21','22','23'],
                         ['24','25','26','27','28','',''],
                     ];
                 }
                 else if(weekday==6){
                     tableData[i] = [
                         ['','','','','','','1'],
                         [ '2', '3', '4','5','6','7','8'],
                         ['9','10','11','12','13','14','15'],
                         ['16','17','18','19','20','21','22'],
                         [,'23','24','25','26','27','28',''],
                     ];
                 }
                }
            }
        }
        const tableHead = ['S','M', 'T', 'W', 'T','F','S'];

        weekdayList.push(
            <Table>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            </Table>
        );
        for(i=0;i<16;i++){
            dateList[i]=[
                <Table>
                    <Rows data={tableData[i]} style={styles.row} textStyle={styles.text}/>
                    <Button
                        onPress={() => navigate('TimeTable1') }
                        title="P"
                    />

                </Table>
            ];
        }
        /*var month0 = Moment().add(0, 'months').format('MMMM YYYY');
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
        var month16 = Moment().add(16, 'months').format('MMMM YYYY');*/

        /*if((month0=='July 2017')||(month0=='January 2017')||(month0=='March 2017')||(month0=='May 2017')||(month0=='August 2017')||(month0=='October 2017')||(month0=='December 2017')){

             const tableData = [
                        ['1', '2', '3', '4','5','6','7'],
                        ['8','9','10','11','12','13','14'],
                        ['15','16','17','18','19','20','21'],
                        ['22','23','24','25','26','27','28'],
                        ['29','30','31','','','',''],
            ];
        }
        if((month0=='April 2017')||(month0=='June 2017')||(month0=='September 2017')||(month0=='November 2017')){

                const     tableData = [
                                ['1', '2', '3', '4','5','6','7'],
                                ['8','9','10','11','12','13','14'],
                                ['15','16','17','18','19','20','21'],
                                ['22','23','24','25','26','27','28'],
                                ['29','30','','','','',''],
                    ];
                }
        if(month0=='February 2017'){

             const tableData = [
                        ['1', '2', '3', '4','5','6','7'],
                        ['8','9','10','11','12','13','14'],
                        ['15','16','17','18','19','20','21'],
                        ['22','23','24','25','26','27','28'],
                        ['29','30','31','','','',''],
            ];
        }*/
/*      if((month2=='July 2017')||(month2=='January 2017')||(month2=='March 2017')||(month2=='May 2017')||(month2=='August 2017')||(month2=='October 2017')||(month2=='December 2017')){

             const tableData = [
                        ['1', '2', '3', '4','5','6','7'],
                        ['8','9','10','11','12','13','14'],
                        ['15','16','17','18','19','20','21'],
                        ['22','23','24','25','26','27','28'],
                        ['29','30','31','','','',''],
            ];
        }
        if((month2=='April 2017')||(month2=='June 2017')||(month2=='September 2017')||(month2=='November 2017')){

              const tableData = [
                                ['1', '2', '3', '4','5','6','7'],
                                ['8','9','10','11','12','13','14'],
                                ['15','16','17','18','19','20','21'],
                                ['22','23','24','25','26','27','28'],
                                ['29','30','','','','',''],
                    ];
                }
        if(month2=='February 2017'){

            const tableData = [
                        ['1', '2', '3', '4','5','6','7'],
                        ['8','9','10','11','12','13','14'],
                        ['15','16','17','18','19','20','21'],
                        ['22','23','24','25','26','27','28'],
                        ['29','30','31','','','',''],
            ];
        }*/

        return([
            {data: [{titleh:weekdayList},{titled:dateList[0]}],key: month[0]},
            {data: [{titleh:weekdayList},{titled:dateList[1]}],key: month[1]},
            {data: [{titleh:weekdayList},{titled:dateList[2]}],key: month[2]},
            {data: [{titleh:weekdayList},{titled:dateList[3]}],key: month[3]},
            {data: [{titleh:weekdayList},{titled:dateList[4]}],key: month[4]},
            {data: [{titleh:weekdayList},{titled:dateList[5]}],key: month[5]},
            {data: [{titleh:weekdayList},{titled:dateList[6]}],key: month[6]},
            {data: [{titleh:weekdayList},{titled:dateList[7]}],key: month[7]},
            {data: [{titleh:weekdayList},{titled:dateList[8]}],key: month[8]},
            {data: [{titleh:weekdayList},{titled:dateList[9]}],key: month[9]},
            {data: [{titleh:weekdayList},{titled:dateList[10]}],key: month[10]},
            {data: [{titleh:weekdayList},{titled:dateList[11]}],key: month[11]},
            {data: [{titleh:weekdayList},{titled:dateList[12]}],key: month[12]},
            {data: [{titleh:weekdayList},{titled:dateList[13]}],key: month[13]},
            {data: [{titleh:weekdayList},{titled:dateList[14]}],key: month[14]},
            {data: [{titleh:weekdayList},{titled:dateList[15]}],key: month[15]},
            //{data: [{titleh:weekdayList},{titled:dateList}],key: month},



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
export class TimeTableScreen extends Component{
    static navigationOptions = {
        title: "TT",
    };
    render(){
        //const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
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
const CalendarsScreen = StackNavigator({
    CalendarScreen_ : {screen: CalendarsScreen1},
    TimeTable1: {screen: TimeTableScreen},
},
    {headerMode:'none'}
);
export default CalendarsScreen;