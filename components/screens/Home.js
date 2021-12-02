import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,TouchableOpacity,TextInput
}from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Checkin from "../Checkin";
import {Formik} from 'formik'


const Home = ({data, changeData})=>{
const navigation = useNavigation()
    return(
        <View style={styles.container}>


            <View style={styles.conbutton}>

                <TouchableOpacity onPress={()=>navigation.navigate('Checkins')} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Check-ins</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Contacts')} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Contacts</Text>
                </TouchableOpacity>
            </View>

            <Formik initialValues={{confirmText:''}} onSubmit={(values)=>{
              if(values.confirmText.toLocaleLowerCase()=="yes")
                changeData(data.slice(1,data.length))
            }  
              }>
                {(props)=>(
                  <View>
                      <Text style = {styles.inputTitle}> Confirm upcoming check-in: </Text>
                      <TextInput 
                        style = {styles.inputStyle}
                        placeholder='Type "yes" to confirm' 
                        onChangeText={props.handleChange('confirmText')}
                        value={props.values.confirmText}
                      /> 
                      <TouchableOpacity onPress={props.handleSubmit} style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>Confirm Check-in</Text>
                      </TouchableOpacity>
                  </View>  
                )}
            </Formik>


            <Text style={styles.sectionTitle}> Upcoming Check-ins:</Text>


            <FlatList data={data} renderItem={({item}) => (
                <View style={styles.item}>
                    {/* where the checkins go */}
                    <Checkin activity={item.activity} location={item.location} date={item.date} time={item.time} />
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

export default Home;
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E8EAED",
      paddingTop:10,
      paddingHorizontal:10
    },
    sectionTitle: {
      fontSize: 32,
      fontWeight: "bold",
      paddingBottom: 10
    },
    item: {
        backgroundColor: '#52CC50',
        padding: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,
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
  });
  