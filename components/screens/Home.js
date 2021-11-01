import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
}from 'react-native'

const Home = ({navigation})=>{
    const [checkins,setCheckins] = useState([
        {
          key:"1",
          activity:"Daily Check-in",
          location:"Home",
          time:"10:55am",
          date:"10/29/2021"
        },
        {
          key:"2",
          activity:"Hiking",
          location:"Blue Mountain",
          time:"11:55am",
          date:"10/29/2021"
        },
        {
          key:"3",
          activity:"Daily Check-in",
          location:"Home",
          time:"10:55am",
          date:"10/29/2021"
        },
        {
          key:"4",
          activity:"Biking",
          location:"Tornoto Trails",
          time:"04:15pm",
          date:"10/29/2021",
        }
    ]);
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.sectionTitle}> Upcoming Check-ins</Text>
            <Button title="Add Checkins" onPress={()=>navigation.navigate('Checkins')}></Button>

            <FlatList data={checkins} renderItem={({item}) => (
                <View style={styles.item}>        
                    <Text>{item.activity}</Text>
                    <Text>{item.location}</Text>
                    <Text>{item.date}</Text>
                    <Text>{item.time}</Text>
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
  