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
        title: 'Time Table',
    };
    render(){
        const { params } = this.props.navigation.state;
        //let roll_no = params.roll
        let myDepartment = params.myDepartment
        let myYear = params.myYear
            return(
                <View>
                    <View>
                        {this.table_func(myDepartment,myYear)}
                    </View>
                </View>
            );
        }
    table_func(myDepartment,myYear){
        var tableData1 = [];
        var tableHead1 = [];
        var tableData2 = [];
        var tableHead2 = [];
        tableHead1 = ['8-8:55', '9-9:55', '10-10:55', '11-11:55', '12-12:55']
        tableHead2 = ['1-1:55', '2-2:55', '3-3:55', '4-4:55', '5-5:55']
        if(myDepartment == 'ce'){
            if(myYear == 'one'){
                tableData1 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
                tableData2 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','CE203','CE211','',''],
                    ['','CE202','CE203','CE211',''],
                    ['','','CE202','CE211',''],
                    ['','','','CE202',''],
                    ['CE203','CE202','','',''],
                ];
                tableData2 = [
                    ['','CE212 Lab(Gr2) / CE214 Lab(Gr1)','CE212 Lab(Gr2) / CE214 Lab(Gr1)','CE212 Lab(Gr2)',''],
                    ['','','','',''],
                    ['','CE212 Lab(Gr1) / CE214 Lab(Gr2)','CE212 Lab(Gr1) / CE214 Lab(Gr2)','CE212 Lab(Gr1)',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','CE312 Lab(Gr2)','CE312 Lab(Gr2)'],
                    ['','','','CE312 Lab(Gr2)','CE312 Lab(Gr1)'],
                    ['CE303','CE305','','CE313(Gr1)','CE313(Gr1)'],
                    ['','','CE305','CE313(Gr2)','CE313(Gr2)'],
                    ['','','','CE305',''],
                ];
                tableData2 = [
                    ['','','','CE302','CE301'],
                    ['','CE303','CE302','CE301','CE305'],
                    ['','CE302','CE301','',''],
                    ['','CE301','','',''],
                    ['','','','CE303','CE302'],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','CE403','CE415','CE411',''],
                    ['','','CE403','CE415','CE414'],
                    ['','','CE415','CE403',''],
                    ['','CE411','','','CE414'],
                    ['','','CE411','',''],
                ];
                tableData2 = [
                    ['','','CE441','',''],
                    ['','CE441','CE413','CE413','CE401'],
                    ['','','','CE401',''],
                    ['','','CE401','CE413','CE413'],
                    ['','CE401','CE414','CE441',''],
                ];
            }
        }
        else if(myDepartment == 'cl'){
            if(myYear == 'one'){
                tableData1 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
                tableData2 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'cse'){
            if(myYear == 'one'){
                tableData1 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
                tableData2 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['CS202','CS221','MA201','HSS','CS205M'],
                    ['CS201','CS202','CS221','MA201',''],
                    ['HSS','CS201','CS202','CS221','CS205M'],
                    ['MA201','HSS','CS201','CS202',''],
                    ['CS221','MA201','HSS','CS201','CS205M'],
                ];
                tableData2 = [
                    ['','CS210 Lab','CS210 Lab','CS210 Lab',''],
                    ['','CS241 Lab','CS241 Lab','CS241 Lab',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'cst'){
            if(myYear == 'one'){
                tableData1 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
                tableData2 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'bt'){
            if(myYear == 'one'){
                tableData1 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
                tableData2 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'ece'){
            if(myYear == 'one'){
                tableData1 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],                ];
                tableData2 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'eee'){
            if(myYear == 'one'){
                tableData1 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
                tableData2 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'ep'){
            if(myYear == 'one'){
                tableData1 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
                tableData2 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['EE220','','','',''],
                    ['MA201(T)','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['PH401','','','',''],
                    ['PH409','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'ma'){
            if(myYear == 'one'){
                tableData1 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
                tableData2 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['MA221','CS221','MA201','HSS','MA211M'],
                    ['MA225','MA221','CS221','MA201',''],
                    ['HSS','MA225','MA221','CS221','MA211M'],
                    ['MA201','HSS','MA225','MA221',''],
                    ['CS221','MA201','HSS','MA225','MA211M'],
                ];
                tableData2 = [
                    ['','','','','MA222'],
                    ['','','','MA222',''],
                    ['','','MA222','',''],
                    ['','MA222','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','MA322','','',''],
                    ['MA372','','MA322','',''],
                    ['','MA372','','MA322',''],
                    ['','','MA372','',''],
                    ['MA322','','','MA372',''],
                ];
                tableData2 = [
                    ['MA311M','HSS','CS343','','CS341'],
                    ['','','','',''],
                    ['MA311M','','','','HSS'],
                    ['','','','HSS',''],
                    ['MA311M','','HSS','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['MA423','MA503','MA453','MA471','MA411M'],
                    ['','MA423','MA503','MA453',''],
                    ['MA471','','MA423','MA503','MA411M'],
                    ['MA453','MA471','','MA423',''],
                    ['MA503','MA453','MA471','','MA411M'],
                ];
                tableData2 = [
                    ['','','','','MA476'],
                    ['','','','MA476',''],
                    ['','','MA476','',''],
                    ['','MA476','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'me'){
            if(myYear == 'one'){
                tableData1 = [
                    ['ME111','EE101','MA101','CH101',''],
                    ['PH101','ME111','EE101','MA101',''],
                    ['CH101','PH101','ME111','EE101',''],
                    ['MA101','CH101','PH101','ME111',''],
                    ['EE101','MA101','CH101','PH101',''],
                ];
                tableData2 = [
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                    ['','Lab','Lab','Lab',''],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
                tableData2 = [
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                ];
            }
        }
        else if(myDepartment == 'design'){
            if(myYear == 'one'){
                tableData1 = [
                    ['','Module','Module','Module','Module'],
                    ['','Module','Module','Module','Module'],
                    ['','Module','Module','Module','Module'],
                    ['','Module','Module','Module','Module'],
                    ['EE101(T)','ME111 (Lab)','ME111 (Lab)','ME111 (Lab)',''],
                ];
                tableData2 = [
                    ['','Module','Module','EE101','ME111'],
                    ['','','EE101','ME111',''],
                    ['','EE101','ME111','Module','Module'],
                    ['','ME111','Module','Module','Module'],
                    ['','Module','Module','Module','EE101'],
                ];
            }
            else if(myYear == 'two'){
                tableData1 = [
                    ['','Module','Module','HSS','DD210M'],
                    ['','Module','Module','Module','Module'],
                    ['','Module','Module','Module','DD210M'],
                    ['','HSS','DD202','DD202','DD202'],
                    ['','','HSS','DD203','DD210M'],
                ];
                tableData2 = [
                    ['','Module','Module','Module',''],
                    ['','Module','Module','Module',''],
                    ['','Module','','',''],
                    ['','DD202','DD202','DD202',''],
                    ['','DD203','DD203','DD203',''],
                ];
            }
            else if(myYear == 'three'){
                tableData1 = [
                    ['','Module','Module','Module',''],
                    ['','Module','Module','Module',''],
                    ['','Module','Module','Module',''],
                    ['','Module','Module','Module',''],
                    ['','DD303','DD303','DD303','DD303'],
                ];
                tableData2 = [
                    ['DD310M','HSS','Module','Module',''],
                    ['Module','Module','Module','Module',''],
                    ['DD310M','Module','Module','Module',''],
                    ['','Module','Module','HSS',''],
                    ['DD310M','','HSS','',''],
                ];
            }
            else if(myYear == 'four'){
                tableData1 = [
                    ['','Module','Module','Module','DD410M'],
                    ['','DD601/ DD606','DD601/ DD606','DD601/ DD606',''],
                    ['','Module','Module','Module','DD410M'],
                    ['','DD607','DD607','DD607','DD607'],
                    ['','Module','Module','Module','DD410M'],
                ];
                tableData2 = [
                    ['','Module','Module','Module',''],
                    ['','DD601/ DD606','DD601/ DD606','DD601/ DD606',''],
                    ['','Module','Module','Module',''],
                    ['','Module','Module','Module',''],
                    ['','Module','Module','Module',''],
                ];
            }
        }
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