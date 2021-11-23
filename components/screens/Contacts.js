import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView,
    FlatList
}from 'react-native'
import {Formik} from 'formik'
import Contact from '../Contact'
const Contacts = ({changeData, data})=>{
    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{name:'',phone:'',email:'',priority:'',key:''}} onSubmit={(values)=>{
              values.key=(data.length+1).toString();
              console.log(changeData(data.concat(values)))
            }  
              }>
                {(props)=>(
                  <View>
                      <Text style = {styles.inputTitle}> Name: </Text>
                      <TextInput
                        style = {styles.inputStyle} 
                        placeholder='Reveiw name' 
                        onChangeText={props.handleChange('name')}
                        value={props.values.name}
                      /> 
                        <Text style = {styles.inputTitle}> Phone Number: </Text>
                        <TextInput 
                        style = {styles.inputStyle}
                        placeholder='Reveiw phone' 
                        onChangeText={props.handleChange('phone')}
                        value={props.values.phone}
                      /> 
                        <Text style = {styles.inputTitle}> Email: </Text>
                        <TextInput 
                        style = {styles.inputStyle}
                        placeholder='Reveiw email' 
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                      /> 
                      <Text style = {styles.inputTitle}> Priority: </Text>
                      <TextInput 
                        style = {styles.inputStyle}
                        placeholder='Reveiw priority' 
                        onChangeText={props.handleChange('priority')}
                        value={props.values.priority}
                      /> 


                      <Button title='Create Contact' color='maroon' onPress={props.handleSubmit}/>
                  </View>  
                )}
            </Formik>

            <FlatList data={data} renderItem={({item}) => (
                <View style={styles.item}>
                    {/* where the checkins go */}
                    <Contact name={item.name} phone={item.phone} email={item.email} priority={item.priority} />
                    {/*
                     <Text>{"Activity: "+item.activity}</Text>
                    <Text>{"Location: "+item.location}</Text>
                    <Text>{"Date: "+item.date}</Text>
                    <Text>{"Time: "+item.time}</Text>
                    */}
                </View>
            )}/>
        </View>
    )
}

export default Contacts;
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
})