import React from 'react'
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
    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{activity:'',location:'',date:'',time:'',key:''}} onSubmit={(values)=>{
              values.key=(data.length+1).toString();
              console.log(changeData(data.concat(values)))
            }  
              }>
                {(props)=>(
                  <View>
                      <TextInput 
                        placeholder='Reveiw Activity' 
                        onChangeText={props.handleChange('activity')}
                        value={props.values.Activity}
                      /> 
                        <TextInput 
                        placeholder='Reveiw Location' 
                        onChangeText={props.handleChange('location')}
                        value={props.values.Location}
                      /> 
                        <TextInput 
                        placeholder='Reveiw Date' 
                        onChangeText={props.handleChange('date')}
                        value={props.values.Date}
                      /> 
                      <TextInput 
                        placeholder='Reveiw Time' 
                        onChangeText={props.handleChange('time')}
                        value={props.values.Time}
                      /> 

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
    }
})