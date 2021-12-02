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
    KeyboardAvoidingView,
    TouchableOpacity
}from 'react-native'
import {Formik} from 'formik'
const Checkins = ({changeData, data})=>{
    const [dateDefault, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState('Empty');
    const [textTime, setTextTime] = useState('Empty');
    const [dbdate, setDbdate] = useState(new Date());;

  
    const onChange = (event,selectedDate) => {
        const currentDate = selectedDate || dateDefault;
        setDate(currentDate);

        let tmpDate = new Date(currentDate);
        let fdate = tmpDate.getDate() + '/' + (tmpDate.getMonth() + 1) + '/' + tmpDate.getFullYear();
        let fTime = tmpDate.getHours() + "h " + tmpDate.getMinutes() + "mins";
        
        setTextDate(fdate);
        setTextTime(fTime);
     //   console.log("tmpDate");
     //   console.log(tmpDate);

        setDbdate(currentDate);
    //    console.log(tmpDate.getHours())
       
       
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{activity:'',location:'',date:'',time:'',key:'', month:'', year:''}} onSubmit={(values)=>{
              values.time=textTime;
              values.date=textDate;
              values.key=(data.length+1).toString();
                console.log(changeData(data.concat(values)))
                console.log(values.activity)
                console.log(values.date)             

                console.log("db")
                console.log(dbdate)
                console.log("db dta ")
                console.log(dbdate.getDate())
                console.log("db h")
                console.log(dbdate.getHours())

                const requestOptions = {
                    method: "post",
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({ month: dbdate.getMonth(), day: dbdate.getDate(), hour: dbdate.getHours(), minute: dbdate.getMinutes(), repeating: 'true', dayOfWeek:dbdate.getDate(), year: dbdate.getFullYear(), userID: 10, graceHours: 1, graceMinutes: 0 })
                }
                fetch("https://gng2101-app.herokuapp.com/createCheckin", requestOptions)
                    .then(response => {
                        console.log("createCheckin status : " + response.status)
                    })




                
                
              

             
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
                      

                      <TouchableOpacity onPress={() => showMode('date')} style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>SET DATE</Text>
                      </TouchableOpacity>
                      <Text style = {styles.displayDate} > {textDate} </Text>

                      <TouchableOpacity onPress={() => showMode('time')} style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>SET TIME</Text>
                      </TouchableOpacity>
                      <Text style = {styles.displayDate} > {textTime} </Text>

                      {show && (
                          <DateTimePicker
                          testID = 'dateTimePicker'
                          value = {dateDefault}
                          mode = {mode}
                          is24Hour = {true}
                          display = 'default'
                          onChange = {onChange}
                          style = {styles.cal}
                          
                          />)}
                      <TouchableOpacity onPress={props.handleSubmit} style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>Create Checkin</Text>
                      </TouchableOpacity>
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
    cal:{
      marginHorizontal:135

    },
    
    inputTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 3
    },
    displayDate: {
        fontSize: 15,
        padding: 3,
        marginLeft: 10,
        flexDirection: 'column',    
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#1dc44a",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      margin: 10,
    },
    appButtonText: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    conbutton:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  
})