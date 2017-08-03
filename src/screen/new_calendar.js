import React, {Component} from 'react';

import {
  Text,
  View,
  TouchableOpacity,AppRegistry,
  StyleSheet,
  Button,
  Alert,
  SectionList,
} from 'react-native';
import CalendarsListScreen1 from './calendar_list.js';
import Moment from 'moment';
import { StackNavigator, } from 'react-navigation';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
        var ROW1 = [];
        var ROW2 = [];
        var ROW3 = [];
        var ROW4 = [];
        var ROW5 = [];
        var ROW6 = [];
        var row1List =[];
        var month = [];
         var row2List =[];
class NewCalendarScreen1 extends React.Component {
    static navigationOptions = {
        title: 'New Calendar',
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
        var j=0;
        var k= 30;

        var year = [];
        var dateList = [];
        var weekdayList = [];
        var weekday = [];
        var monthArr = [];
        var tableData = [];

        for(i=0;i<12;i++){
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
                        ROW1[i] = ['1', '2', '3', '4','5','6','7'],
                        ROW2[i] = ['8','9','10','11','12','13','14'],
                        ROW3[i] = ['15','16','17','18','19','20','21'],
                        ROW4[i] = ['22','23','24','25','26','27','28'],
                        ROW5[i] = ['29','30','31','','','',''],
                        ROW6[i] = []
                }
                else if(weekday==1){
                    ROW1[i]=    ['','1', '2', '3', '4','5','6'],
                    ROW2[i] =    ['7','8','9','10','11','12','13'],
                    ROW3[i] =    ['14','15','16','17','18','19','20'],
                    ROW4[i] =    ['21','22','23','24','25','26','27'],
                    ROW5[i] =    ['28','29','30','31','','',''],
                    ROW6[i] = []
                }
                else if(weekday==2){
                    ROW1[i] =     ['','','1', '2', '3', '4','5'],
                    ROW2[i] =    ['6','7','8','9','10','11','12'],
                    ROW3[i] =    ['13','14','15','16','17','18','19'],
                    ROW4[i] =    ['20','21','22','23','24','25','26'],
                    ROW5[i] =    ['27','28','29','30','31','',''],
                    ROW6[i] = []
                }
                else if(weekday==3){
                    ROW1[i]=    ['','','','1', '2', '3', '4'],
                    ROW2[i]=    ['5','6','7','8','9','10','11'],
                    ROW3[i]=    ['12','13','14','15','16','17','18'],
                    ROW4[i]=    ['19','20','21','22','23','24','25'],
                    ROW5[i]=    ['26','27','28','29','30','31',''],
                    ROW6[i] = []
                }
                else if(weekday==4){
                    ROW1[i]=   ['','','','','1', '2', '3'],
                    ROW2[i] =    [ '4','5','6','7','8','9','10'],
                    ROW3[i]=    ['11','12','13','14','15','16','17'],
                    ROW4[i]=    ['18','19','20','21','22','23','24'],
                    ROW5[i]=    ['25','26','27','28','29','30','31'],
                    ROW6[i] = []
                }
                else if(weekday==5){
                    ROW1[i]=    ['','','','','','1', '2'],
                    ROW2[i] =    [ '3', '4','5','6','7','8','9'],
                    ROW3[i]=    ['10','11','12','13','14','15','16'],
                    ROW4[i]=  ['17','18','19','20','21','22','23'],
                    ROW5[i]=    ['24','25','26','27','28','29','30'],
                    ROW6[i]=    ['31','','','','','','']
                }
                else if(weekday==6){
                    ROW1[i]=    ['','','','','','','1'],
                    ROW2[i] =    [ '2', '3', '4','5','6','7','8'],
                    ROW3[i]=    ['9','10','11','12','13','14','15'],
                    ROW4[i]=    ['16','17','18','19','20','21','22'],
                    ROW5[i]=    [,'23','24','25','26','27','28','29'],
                    ROW6[i]=    ['30','31','','','','','']

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
                    ROW1[i] =    ['1', '2', '3', '4','5','6','7'],
                    ROW2[i] =    ['8','9','10','11','12','13','14'],
                    ROW3[i] =   ['15','16','17','18','19','20','21'],
                    ROW4[i] =   ['22','23','24','25','26','27','28'],
                    ROW5[i] =   ['29','30','','','','',''],
                    ROW6[i] = []
                }
                else if(weekday==1){
                    ROW1[i] =   ['','1', '2', '3', '4','5','6'],
                    ROW2[i] =   ['7','8','9','10','11','12','13'],
                    ROW3[i] =   ['14','15','16','17','18','19','20'],
                    ROW4[i] =   ['21','22','23','24','25','26','27'],
                    ROW5[i] =   ['28','29','30','','','',''],
                    ROW6[i] = []
                }
                else if(weekday==2){
                    ROW1[i] =   ['','','1', '2', '3', '4','5'],
                    ROW2[i] =   ['6','7','8','9','10','11','12'],
                    ROW3[i] =   ['13','14','15','16','17','18','19'],
                    ROW4[i] =   ['20','21','22','23','24','25','26'],
                    ROW5[i] =   ['27','28','29','30','','',''],
                    ROW6[i] = []
                }
                else if(weekday==3){
                    ROW1[i] =   ['','','','1', '2', '3', '4'],
                    ROW2[i] =   ['5','6','7','8','9','10','11'],
                    ROW3[i] =   ['12','13','14','15','16','17','18'],
                    ROW4[i] =   ['19','20','21','22','23','24','25'],
                    ROW5[i] =   ['26','27','28','29','30','',''],
                    ROW6[i] = []
                }
                else if(weekday==4){
                    ROW1[i] =   ['','','','','1', '2', '3'],
                    ROW2[i] =   [ '4','5','6','7','8','9','10'],
                    ROW3[i] =   ['11','12','13','14','15','16','17'],
                    ROW4[i] =   ['18','19','20','21','22','23','24'],
                    ROW5[i] =   ['25','26','27','28','29','30',''],
                    ROW6[i] = []
                }
                else if(weekday==5){
                    ROW1[i] =   ['','','','','','1', '2'],
                    ROW2[i] =   [ '3', '4','5','6','7','8','9'],
                    ROW3[i] =   ['10','11','12','13','14','15','16'],
                    ROW4[i] =   ['17','18','19','20','21','22','23'],
                    ROW5[i] =   ['24','25','26','27','28','29','30'],
                    ROW6[i] = []
                }
                else if(weekday==6){
                    ROW1[i] =   ['','','','','','','1'],
                    ROW2[i] =   [ '2', '3', '4','5','6','7','8'],
                    ROW3[i] =   ['9','10','11','12','13','14','15'],
                    ROW4[i] =   ['16','17','18','19','20','21','22'],
                    ROW5[i] =   [,'23','24','25','26','27','28','29'],
                    ROW6[i] =   ['30','','','','','','']
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
                        ROW1[i] =   ['1', '2', '3', '4','5','6','7'],
                        ROW2[i] =   ['8','9','10','11','12','13','14'],
                        ROW3[i] =    ['15','16','17','18','19','20','21'],
                        ROW4[i] =    ['22','23','24','25','26','27','28'],
                        ROW5[i] =    ['29','','','','','',''],
                        ROW6[i] = []
                    }
                    else if(weekday==1){
                         ROW1[i] =    ['','1', '2', '3', '4','5','6'],
                         ROW2[i] =    ['7','8','9','10','11','12','13'],
                         ROW3[i] =    ['14','15','16','17','18','19','20'],
                         ROW4[i] =    ['21','22','23','24','25','26','27'],
                         ROW5[i] =    ['28','29','','','','',''],
                         ROW6[i] = []
                    }
                    else if(weekday==2){
                        ROW1[i] =     ['','','1', '2', '3', '4','5'],
                        ROW2[i] =     ['6','7','8','9','10','11','12'],
                        ROW3[i] =     ['13','14','15','16','17','18','19'],
                        ROW4[i] =     ['20','21','22','23','24','25','26'],
                        ROW5[i] =     ['27','28','29','','','',''],
                        ROW6[i] = []
                    }
                    else if(weekday==3){
                         ROW1[i] =    ['','','','1', '2', '3', '4'],
                         ROW2[i] =    ['5','6','7','8','9','10','11'],
                         ROW3[i] =    ['12','13','14','15','16','17','18'],
                         ROW4[i] =    ['19','20','21','22','23','24','25'],
                         ROW5[i] =    ['26','27','28','29','','',''],
                         ROW6[i] = []
                    }
                    else if(weekday==4){
                         ROW1[i] =    ['','','','','1', '2', '3'],
                         ROW2[i] =    [ '4','5','6','7','8','9','10'],
                         ROW3[i] =    ['11','12','13','14','15','16','17'],
                         ROW4[i] =    ['18','19','20','21','22','23','24'],
                         ROW5[i] =    ['25','26','27','28','29','',''],
                         ROW6[i] = []
                    }
                    else if(weekday==5){
                         ROW1[i] =    ['','','','','','1', '2'],
                         ROW2[i] =    [ '3', '4','5','6','7','8','9'],
                         ROW3[i] =    ['10','11','12','13','14','15','16'],
                         ROW4[i] =    ['17','18','19','20','21','22','23'],
                         ROW5[i] =    ['24','25','26','27','28','29',''],
                         ROW6[i] = []
                    }
                    else if(weekday==6){
                        ROW1[i] = ['','','','','','','1'],
                        ROW2[i] = [ '2', '3', '4','5','6','7','8'],
                        ROW3[i] = ['9','10','11','12','13','14','15'],
                        ROW4[i] = ['16','17','18','19','20','21','22'],
                        ROW5[i] = [,'23','24','25','26','27','28','29'],
                        ROW6[i] = []
                    }
                }
                else{
                    if(weekday==0){
                        ROW1[i] =    ['1', '2', '3', '4','5','6','7'],
                        ROW2[i] =    ['8','9','10','11','12','13','14'],
                        ROW3[i] =    ['15','16','17','18','19','20','21'],
                        ROW4[i] =    ['22','23','24','25','26','27','28'],
                        ROW5[i] = [],
                        ROW6[i] = []
                    }
                    else if(weekday==1){
                        ROW1[i] =    ['','1', '2', '3', '4','5','6'],
                        ROW2[i] =    ['7','8','9','10','11','12','13'],
                        ROW3[i] =    ['14','15','16','17','18','19','20'],
                        ROW4[i] =    ['21','22','23','24','25','26','27'],
                        ROW5[i] =    ['28','','','','','',''],
                        ROW6[i] = []
                    }
                    else if(weekday==2){
                        ROW1[i] =    ['','','1', '2', '3', '4','5'],
                        ROW2[i] =    ['6','7','8','9','10','11','12'],
                        ROW3[i] =    ['13','14','15','16','17','18','19'],
                        ROW4[i] =    ['20','21','22','23','24','25','26'],
                        ROW5[i] =    ['27','28','','','','',''],
                        ROW6[i] = []
                    }
                    else if(weekday==3){
                        ROW1[i] =    ['','','','1', '2', '3', '4'],
                        ROW2[i] =    ['5','6','7','8','9','10','11'],
                        ROW3[i] =    ['12','13','14','15','16','17','18'],
                        ROW4[i] =    ['19','20','21','22','23','24','25'],
                        ROW5[i] =    ['26','27','28','','','',''],
                        ROW6[i] = []
                     }
                    else if(weekday==4){
                        ROW1[i] =    ['','','','','1', '2', '3'],
                        ROW2[i] =    [ '4','5','6','7','8','9','10'],
                        ROW3[i] =    ['11','12','13','14','15','16','17'],
                        ROW4[i] =    ['18','19','20','21','22','23','24'],
                        ROW5[i] =    ['25','26','27','28','','',''],
                        ROW6[i] = []
                    }
                    else if(weekday==5){
                        ROW1[i] =    ['','','','','','1', '2'],
                        ROW2[i] =    [ '3', '4','5','6','7','8','9'],
                        ROW3[i] =    ['10','11','12','13','14','15','16'],
                        ROW4[i] =    ['17','18','19','20','21','22','23'],
                        ROW5[i] =    ['24','25','26','27','28','',''],
                        ROW6[i] = []
                    }
                    else if(weekday==6){
                        ROW1[i] =   ['','','','','','','1'],
                        ROW2[i] =   [ '2', '3', '4','5','6','7','8'],
                        ROW3[i] =   ['9','10','11','12','13','14','15'],
                        ROW4[i] =   ['16','17','18','19','20','21','22'],
                        ROW5[i] =   [,'23','24','25','26','27','28',''],
                        ROW6[i] = []
                    }
                }
            }
            dateList[i]=[
                <View>
                    <View style={styles.container}>
                        <View style={styles.row_style}>
                            {this.row1func(i)}
                        </View>
                        <View style={styles.row_style}>
                            {this.row2func(i)}
                        </View>
                        <View style={styles.row_style}>
                            {this.row3func(i)}
                        </View>
                        <View style={styles.row_style}>
                            {this.row4func(i)}
                        </View>
                        <View style={styles.row_style}>
                            {this.row5func(i)}
                        </View>
                        <View style={styles.row_style}>
                            {this.row6func(i)}
                        </View>
                    </View>
                </View>
            ];
        }
        var tableHead = ['S','M', 'T', 'W', 'T','F','S'];
        weekdayList.push(
        <View>
            <Table>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            </Table>
        </View>
        );


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
        ])
    }
        row1func=(i)=>{
            const { navigate } = this.props.navigation;
            var num = String(i);
            var n = i;

            //Alert.alert(num);
            //Alert.alert(i);
            if(i==0){
                return ROW1[0].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[0]})}
                        />
                    </View>
                })
            }
            else if(i==1){
                return ROW1[1].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[1]})}
                        />
                    </View>
                })
            }
            else if(i==2){
                return ROW1[2].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[2]})}
                        />
                    </View>
                })
            }
            else if(i==3){
                return ROW1[3].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[3]})}
                        />
                    </View>
                })
            }
            else if(i==4){
                return ROW1[4].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[4]})}
                        />
                    </View>
                })
            }
            else if(i==5){
                return ROW1[5].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[5]})}
                        />
                    </View>
                })
            }
            else if(i==6){
                return ROW1[6].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[6]})}
                        />
                    </View>
                })
            }
            else if(i==7){
                return ROW1[7].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[7]})}
                        />
                    </View>
                })
            }
            else if(i==8){
                return ROW1[8].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[8]})}
                        />
                    </View>
                })
            }
            else if(i==9){
                return ROW1[9].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[9]})}
                        />
                    </View>
                })
            }
            else if(i==10){
                return ROW1[10].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[10]})}
                        />
                    </View>
                })
            }
            else if(i==11){
                return ROW1[11].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[11]})}
                        />
                    </View>
                })
            }
        }
        row2func=(i)=>{
            const { navigate } = this.props.navigation;
            var num = String(i);
            var n = i;
            //Alert.alert(num);
            //Alert.alert(i);
            if(i==0){
                return ROW2[0].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[0]})}
                        />
                    </View>
                })
            }
            else if(i==1){
                return ROW2[1].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[1]})}
                        />
                    </View>
                })
            }
            else if(i==2){
                return ROW2[2].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[2]})}
                        />
                    </View>
                })
            }
            else if(i==3){
                return ROW2[3].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[3]})}
                        />
                    </View>
                })
            }
            else if(i==4){
                return ROW2[4].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[4]})}
                        />
                    </View>
                })
            }
            else if(i==5){
                return ROW2[5].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[5]})}
                        />
                    </View>
                })
            }
            else if(i==6){
                return ROW2[6].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[6]})}
                        />
                    </View>
                })
            }
            else if(i==7){
                return ROW2[7].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[7]})}
                        />
                    </View>
                })
            }
            else if(i==8){
                return ROW2[8].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[8]})}
                        />
                    </View>
                })
            }
            else if(i==9){
                return ROW2[9].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[9]})}
                        />
                    </View>
                })
            }
            else if(i==10){
                return ROW2[10].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[10]})}
                        />
                    </View>
                })
            }
            else if(i==11){
                return ROW2[11].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[11]})}
                        />
                    </View>
                })
            }
        }
        row3func=(i)=>{
            const { navigate } = this.props.navigation;
            var num = String(i);
            var n = i;
            //Alert.alert(num);
            //Alert.alert(i);
            if(i==0){
                return ROW3[0].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[0]})}
                        />
                    </View>
                })
            }
            else if(i==1){
                return ROW3[1].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[1]})}
                        />
                    </View>
                })
            }
            else if(i==2){
                return ROW3[2].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[2]})}
                        />
                    </View>
                })
            }
            else if(i==3){
                return ROW3[3].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[3]})}
                        />
                    </View>
                })
            }
            else if(i==4){
                return ROW3[4].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[4]})}
                        />
                    </View>
                })
            }
            else if(i==5){
                return ROW3[5].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[5]})}
                        />
                    </View>
                })
            }
            else if(i==6){
                return ROW3[6].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[6]})}
                        />
                    </View>
                })
            }
            else if(i==7){
                return ROW3[7].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[7]})}
                        />
                    </View>
                })
            }
            else if(i==8){
                return ROW3[8].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[8]})}
                        />
                    </View>
                })
            }
            else if(i==9){
                return ROW3[9].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[9]})}
                        />
                    </View>
                })
            }
            else if(i==10){
                return ROW3[10].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[10]})}
                        />
                    </View>
                })
            }
            else if(i==11){
                return ROW3[11].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[11]})}
                        />
                    </View>
                })
            }
        }
        row4func=(i)=>{
            const { navigate } = this.props.navigation;
            var num = String(i);
            var n = i;
            //Alert.alert(num);
            //Alert.alert(i);
            if(i==0){
                return ROW4[0].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[0]})}
                        />
                    </View>
                })
            }
            else if(i==1){
                return ROW4[1].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[1]})}
                        />
                    </View>
                })
            }
            else if(i==2){
                return ROW4[2].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[2]})}
                        />
                    </View>
                })
            }
            else if(i==3){
                return ROW4[3].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[3]})}
                        />
                    </View>
                })
            }
            else if(i==4){
                return ROW4[4].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[4]})}
                        />
                    </View>
                })
            }
            else if(i==5){
                return ROW4[5].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[5]})}
                        />
                    </View>
                })
            }
            else if(i==6){
                return ROW4[6].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[6]})}
                        />
                    </View>
                })
            }
            else if(i==7){
                return ROW4[7].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[7]})}
                        />
                    </View>
                })
            }
            else if(i==8){
                return ROW4[8].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[8]})}
                        />
                    </View>
                })
            }
            else if(i==9){
                return ROW4[9].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[9]})}
                        />
                    </View>
                })
            }
            else if(i==10){
                return ROW4[10].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[10]})}
                        />
                    </View>
                })
            }
            else if(i==11){
                return ROW4[11].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[11]})}
                        />
                    </View>
                })
            }
        }
        row5func=(i)=>{
            const { navigate } = this.props.navigation;
            var num = String(i);
            var n = i;
            //Alert.alert(num);
            //Alert.alert(i);
            if(i==0){
                return ROW5[0].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[0]})}
                        />
                    </View>
                })
            }
            else if(i==1){
                return ROW5[1].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[1]})}
                        />
                    </View>
                })
            }
            else if(i==2){
                return ROW5[2].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[2]})}
                        />
                    </View>
                })
            }
            else if(i==3){
                return ROW5[3].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[3]})}
                        />
                    </View>
                })
            }
            else if(i==4){
                return ROW5[4].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[4]})}
                        />
                    </View>
                })
            }
            else if(i==5){
                return ROW5[5].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[5]})}
                        />
                    </View>
                })
            }
            else if(i==6){
                return ROW5[6].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[6]})}
                        />
                    </View>
                })
            }
            else if(i==7){
                return ROW5[7].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[7]})}
                        />
                    </View>
                })
            }
            else if(i==8){
                return ROW5[8].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[8]})}
                        />
                    </View>
                })
            }
            else if(i==9){
                return ROW5[9].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[9]})}
                        />
                    </View>
                })
            }
            else if(i==10){
                return ROW5[10].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[10]})}
                        />
                    </View>
                })
            }
            else if(i==11){
                return ROW5[11].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[11]})}
                        />
                    </View>
                })
            }
        }
        row6func=(i)=>{
            const { navigate } = this.props.navigation;
            var num = String(i);
            var n = i;
            //Alert.alert(num);
            //Alert.alert(i);
            if(i==0){
                return ROW6[0].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[0]})}
                        />
                    </View>
                })
            }
            else if(i==1){
                return ROW6[1].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[1]})}
                        />
                    </View>
                })
            }
            else if(i==2){
                return ROW6[2].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[2]})}
                        />
                    </View>
                })
            }
            else if(i==3){
                return ROW6[3].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[3]})}
                        />
                    </View>
                })
            }
            else if(i==4){
                return ROW6[4].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[4]})}
                        />
                    </View>
                })
            }
            else if(i==5){
                return ROW6[5].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[5]})}
                        />
                    </View>
                })
            }
            else if(i==6){
                return ROW6[6].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[6]})}
                        />
                    </View>
                })
            }
            else if(i==7){
                return ROW6[7].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[7]})}
                        />
                    </View>
                })
            }
            else if(i==8){
                return ROW6[8].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[8]})}
                        />
                    </View>
                })
            }
            else if(i==9){
                return ROW6[9].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[9]})}
                        />
                    </View>
                })
            }
            else if(i==10){
                return ROW6[10].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[10]})}
                        />
                    </View>
                })
            }
            else if(i==11){
                return ROW6[11].map((name)=>{
                    return <View style={styles.button_style}>
                        <Button
                            title = {name}
                            onPress={() => navigate('TimeTable1',{date:name, month:month[11]})}
                        />
                    </View>
                })
            }
        }
        /*row11func=(i)=>{
            const { navigate } = this.props.navigation;
            i = this.props.i;
            return ROW1[15].map((name)=>{
                return <View style={styles.button_style}>
                    <Button
                        title = {name}
                        onPress={() => navigate('TimeTable1')}
                    />
                </View>
            })
        }
        row22func=()=>{
            const { navigate } = this.props.navigation;
            return ROW2[15].map((name)=>{
                return <View style={styles.button_style}>
                    <Button
                        title = {name}
                        onPress={() => navigate('TimeTable1')}
                    />
                </View>
            })
        }
        row33func=()=>{
            const { navigate } = this.props.navigation;
            return ROW3[15].map((name)=>{
                return <View style={styles.button_style}>
                    <Button
                        title = {name}
                        onPress={() => navigate('TimeTable1')}
                    />
                </View>
            })
        }
        row44func=()=>{
            const { navigate } = this.props.navigation;
            return ROW4[15].map((name)=>{
                return <View style={styles.button_style}>
                    <Button
                        title = {name}
                        onPress={() => navigate('TimeTable1')}
                    />
                </View>
            })
        }
        row55func=()=>{
            const { navigate } = this.props.navigation;
            return ROW5[15].map((name)=>{
                return <View style={styles.button_style}>
                    <Button style={styles.button}
                        title = {name}
                        onPress={() => navigate('TimeTable1')}
                    />
                </View>
            })
        }*/
/*        row3func=()=>{
            const { navigate } = this.props.navigation;
            return ROW3[1].map((name)=>{
                return <View style={styles.button_style}>
                    <Text>16666666</Text>
                </View>
            })
        }*/
}
export class Row4Screen extends Component{

    render(){
        //const { navigate } = this.props.navigation;
        return <Text>yuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</Text>
    }
}
export class TimeTableScreen extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.date} ${navigation.state.params.month} `,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.date} </Text>
      </View>
    );
  }
   /* static navigationOptions = {
        title: "TT",
    };
    render(){
        //const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }*/
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'stretch',
        width:350,
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
      row: { flex:1, width:340, height: 30, backgroundColor:'green' },


    row_style: {borderColor:'yellow',borderWidth:4,flexDirection:'row',},
    button_style: {borderColor:'blue',borderWidth:4,flex:1,alignItems:'stretch'},
    button:{backgroundColor:'yellow',color:'yellow'}
});
const NewCalendarScreen = StackNavigator({
    NewCalendarScreen_ : {screen: NewCalendarScreen1},
    TimeTable1: {screen: TimeTableScreen},
},
    {headerMode:'none'}
);


export default NewCalendarScreen;