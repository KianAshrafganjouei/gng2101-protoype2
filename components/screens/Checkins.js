//install using command: npm install react-native-datepicker --save
//npm install @react-native-community/datetimepicker --save

import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
//import DatePicker from 'react-native-datepicker';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView
}from 'react-native'
import {Formik} from 'formik'
const Checkins = ({changeData, data})=>{
    const [dateDefault, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState('Empty');
    const [textTime, setTextTime] = useState('Empty');

    const onChange = (event,selectedDate) => {
        const currentDate = selectedDate || dateDefault;
        setDate(currentDate);

        let tmpDate = new Date(currentDate);
        let fdate = tmpDate.getDate() + '/' + (tmpDate.getMonth() + 1) + '/' + tmpDate.getFullYear();
        let fTime = tmpDate.getHours() + "h " + tmpDate.getMinutes() + "mins";
        
        setTextDate(fdate);
        setTextTime(fTime);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{activity:'',location:'',date:'',time:'',key:''}} onSubmit={(values)=>{
              values.time=textTime;
              values.date=textDate;
              values.key=(data.length+1).toString();
              console.log(changeData(data.concat(values)))
            }  
              }>
                {(props)=>(
                  <View>
                      <Text style = {styles.inputTitle}> Activity Name: </Text>
                      <TextInput 
                        style = {styles.inputStyle}
                        placeholder='Reveiw Activity' 
                        onChangeText={props.handleChange('activity')}
                        value={props.values.activity}
                      /> 
                        <Text style = {styles.inputTitle}> Location: </Text>
                        <TextInput 
                        style = {styles.inputStyle}
                        placeholder='Reveiw Location' 
                        onChangeText={props.handleChange('location')}
                        value={props.values.location}
                      /> 
                        <Text style = {styles.inputTitle}> Pick Date and Time: </Text>
                        
                        {/* <TextInput 
                        placeholder='Reveiw Date' 
                        onChangeText={props.handleChange('date')}
                        value={props.values.Date}
                      />  */}

                      {/* <TextInput 
                        placeholder='Reveiw Time' 
                        onChangeText={props.handleChange('time')}
                        value={props.values.Time}
                      />  */}
                      
                      <Button title='Set Date' onPress={() => showMode('date')} value={props.values.date}/>
                      <Text style = {styles.displayDate} > {textDate} </Text>
                      <Button title='Set Time' onPress={() => showMode('time')} value={props.values.time}/>
                      <Text style = {styles.displayDate} > {textTime} </Text>


                      {show && (
                          <DateTimePicker
                          testID = 'dateTimePicker'
                          value = {dateDefault}
                          mode = {mode}
                          is24Hour = {true}
                          display = 'default'
                          onChange = {onChange}
                          
                          />)}
                        
                      <Button title='Create Checkin' color='maroon' onPress={props.handleSubmit}/>
                  </View>  
                )}
            </Formik>
        </View>
    )
}

export default Checkins;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    
    inputTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 3
    },
    displayDate: {
        fontSize: 15,
        padding: 3,
        marginLeft: 150
    }
})