import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
}from 'react-native'
import {Formik} from 'formik'
const Checkins = ({changeData})=>{
    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{Activity:'',Location:'',Date:'',Time:''}} onSubmit={(values)=>{changeData(values)}}>
                {(props)=>(
                  <View>
                      <TextInput 
                        placeholder='Reveiw Activity' 
                        onChangeText={props.handleChange('Activity')}
                        value={props.values.Activity}
                      /> 
                        <TextInput 
                        placeholder='Reveiw Location' 
                        onChangeText={props.handleChange('Location')}
                        value={props.values.Location}
                      /> 
                        <TextInput 
                        placeholder='Reveiw Date' 
                        onChangeText={props.handleChange('Date')}
                        value={props.values.Date}
                      /> 
                      <TextInput 
                        placeholder='Reveiw Time' 
                        onChangeText={props.handleChange('Time')}
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