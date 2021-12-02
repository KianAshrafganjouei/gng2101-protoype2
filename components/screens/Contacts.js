import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView,
    FlatList,TouchableOpacity
}from 'react-native'
import {Formik} from 'formik'
import Contact from '../Contact'
const Contacts = ({changeData, data})=>{
    return(
        <View style={StyleSheet.container}>
            <Formik initialValues={{name:'',phone:'',email:'',priority:'',key:''}} onSubmit={(values)=>{
              values.key=(data.length+1).toString();
                console.log(changeData(data.concat(values)))
                const requestOptions = {
                    method: "post",
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({ userID: 10, phoneNumber: values.phone, priority: values.priority })
                }
                fetch("https://gng2101-app.herokuapp.com/createContact", requestOptions)
                    .then(response => {
                        console.log("createContact status : " + response.status)
                    })
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

                      <TouchableOpacity onPress={props.handleSubmit} style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>Create Contact</Text>
                      </TouchableOpacity>
                      
                  </View>  
                )}
            </Formik>
            <Text style={styles.sectionTitle}> Your Contacts:</Text>

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
   sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 10
  },
  
  inputTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      padding: 3
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#1dc44a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    marginHorizontal:70
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