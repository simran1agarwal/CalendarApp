import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,AppRegistry,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { withNavigation } from 'react-navigation';


var NAME = ['S','M','T','W','T','F','S'];
var ROW1 = ['1','2','3','4','5','6','7'];
var ROW2 = ['8','9','10','11','12','13','14'];
var ROW3 = ['15','16','17','18','19','20','21'];
var ROW4 = ['22','23','24','25','26','27','28'];
var ROW5 = ['29','30','31','','','',''];

class CalendarsListScreen1 extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Calendar List',
    });
    render(){
    //const { navigate } = this.props.navigation;
        const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
        const tableData = [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
        ];
            return(
                <View style={styles.container}>
                    <View style={styles.row_style}>
                        {this.names()}
                    </View>
                    <View style={styles.row_style}>
                        {this.row1()}
                    </View>
                    <View style={styles.row_style}>
                        {this.row2()}
                    </View>
                    <View style={styles.row_style}>
                        {this.row3()}
                    </View>
                    <View style={styles.row_style}>
                        {this.row4()}
                    </View>
                    <View style={styles.row_style}>
                        {this.row5()}
                    </View>
                    <Table>
                        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                    </Table>
                </View>
            );
        }
        names(){
            const { navigate } = this.props.navigation;

            return NAME.map((name)=>{
                return <View style={styles.button_style}>
                                       <Button
                                           title = {name}
                                           onPress={() => navigate('TimeTable')}
                                       />
                                   </View>
            })
        }
        row1(){
            const { navigate } = this.props.navigation;

            return ROW1.map((name)=>{
                return <View style={styles.button_style}>
                                       <Button
                                           title = {name}
                                           onPress={() => navigate('TimeTable')}
                                       />
                                   </View>
            })
        }
        row2(){
            const { navigate } = this.props.navigation;

            return ROW2.map((name)=>{
                return <View style={styles.button_style}>
                                       <Button
                                           title = {name}
                                           onPress={() => navigate('TimeTable')}
                                       />
                                   </View>
            })
        }
        row3(){
            const { navigate } = this.props.navigation;

            return ROW3.map((name)=>{
                return <View style={styles.button_style}>
                                       <Button
                                           title = {name}
                                           onPress={() => navigate('TimeTable')}
                                       />
                                   </View>
            })
        }
        row4(){
            const { navigate } = this.props.navigation;

            return ROW4.map((name)=>{
                return <View style={styles.button_style}>
                                       <Button
                                           title = {name}
                                           onPress={() => navigate('TimeTable')}
                                       />
                                   </View>
            })
        }
        row5(){
            const { navigate } = this.props.navigation;

            return ROW5.map((name)=>{
                return <View style={styles.button_style}>
                                       <Button
                                           title = {name}
                                           onPress={() => navigate('TimeTable')}
                                       />
                                   </View>
            })
        }
        /*table_data(){
            return TABLE_DATA.map((arr) => {
                return <Sub arr={arr}/>
            })
        }*/

}
/*class Sub extends Component{
       render(){
           //var arr = {this.props.arr};
           return(
               arr.map((name) => {
                   return <ColumnTitle name={name}/>
               })
           );
       }
   }*/

/*
class ColumnTitle extends React.Component{

    render(){
        const {navigate}  = this.props.navigation;

        return(
            <View style={styles.button_style}>
                <Button
                    title = {this.props.name}
                    onPress={() => navigate('TimeTable')}
                />
            </View>
        );
    }
}
*/

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

const CalendarsListScreen = StackNavigator({
    CalendarList_ : {screen: CalendarsListScreen1},
    TimeTable: {screen: TimeTableScreen},
},
    {headerMode:'none'}
);

const styles = StyleSheet.create({
    container: { borderColor:'blue',borderWidth:4},
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5 },
    row: { height: 30 },
    row_style: {borderColor:'yellow',borderWidth:4,flexDirection:'row'},
    button_style: {borderColor:'red',borderWidth:4,flex:1,alignItems:'stretch'},
})

export default CalendarsListScreen;