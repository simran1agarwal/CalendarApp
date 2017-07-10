import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class TimeTableScreen extends React.Component {
    static navigationOptions = {
        title: 'Agenda',
    };
    render(){
            return(
                <View>
                    <View>
                        {this.table_func()}
                    </View>
                </View>
            );
        }
    table_func(){
        var tableData1 = [];
        var tableHead1 = [];
        var tableData2 = [];
        var tableHead2 = [];
        tableHead1 = ['8-8:55', '9-9:55', '10-10:55', '11-11:55', '12-12:55']
        tableData1 = [
            ['','Module','Module','Module','Module'],
            ['','Module','Module','Module','Module'],
            ['','Module','Module','Module','Module'],
            ['','Module','Module','Module','Module'],
            ['EE 101','Lab-ME 111','Lab-ME 111','Lab-ME 111',''],
        ];
        tableHead2 = ['Lunch', '2-2:55', '3-3:55', '4-4:55', '5-5:55']
        tableData2 = [
            ['','Module','Module','EE 101','ME 101'],
            ['','','EE 101','ME 101',''],
            ['','EE 101','ME 101','Module','Module'],
            ['','ME 101','Module','Module','Module'],
            ['','Module','Module','Module','EE 101'],
        ];
        return(
            <View>
                <Table>
                    <Row data={tableHead1} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData1} style={styles.row} textStyle={styles.text}/>
                </Table>
                <View style={styles.space}>
                </View>
                <Table>
                    <Row data={tableHead2} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData2} style={styles.row} textStyle={styles.text}/>
                </Table>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 },
  space: { height:70, backgroundColor: 'white'},
})
export default TimeTableScreen;