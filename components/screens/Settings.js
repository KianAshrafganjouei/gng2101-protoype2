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
const Settings = ({changeData, data})=>{
    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{name:data.name,phone:data.phone,email:data.email}} onSubmit={(values)=>{
              changeData(values)
              const requestOptions={
                  method:"post",
                  headers:{'Content-Type':'application/json','Accept':'application/json'},
                  body: JSON.stringify({day:1, year:2, month:2,hour:1, minute:1 })
              }
              fetch("https://gng2101-app.herokuapp.com/create",requestOptions)
                .then(response=>{
                    console.log(response.status)
                })
            }  
              }>
                {(props)=>(
                  <View>
                      <TextInput 
                        placeholder='' 
                        onChangeText={props.handleChange('name')}
                        value={props.values.name}
                      /> 
                        <TextInput 
                        placeholder='' 
                        onChangeText={props.handleChange('phone')}
                        value={props.values.phone}
                      /> 
                        <TextInput 
                        placeholder='' 
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                      /> 
                      <Button title='Edit Settings' color='maroon' onPress={props.handleSubmit}/>
                  </View>  
                )}
            </Formik>
        </View>
    )
}

export default Settings;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})