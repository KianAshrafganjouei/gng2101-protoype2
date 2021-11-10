import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
}from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Checkin from "../Checkin";

const Home = ({data})=>{
const navigation = useNavigation()
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.sectionTitle}> Upcoming Check-ins</Text>
            <Button title="Add Checkins" onPress={()=>navigation.navigate('Checkins')}></Button>
            {console.log(data)}
            {console.log("data")}


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
      paddingTop:50,
      paddingHorizontal:20
    },
    sectionTitle: {
      fontSize: 32,
      fontWeight: "bold",
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
  });
  