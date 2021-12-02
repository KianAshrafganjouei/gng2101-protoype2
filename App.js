import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens'
import Home from "./components/screens/Home"
import Checkins from "./components/screens/Checkins"
import Settings from "./components/screens/Settings"
import Contacts from "./components/screens/Contacts"

enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator()
export default function App() {
    {/*
    const [checkins, setCheckins] = useState();
    const handleCheckin = () => {
        console.log(checkins);
    }
    */}
    const deleteCheckin = (index) => {
        let checkinsCopy = [...checkins];
        checkinsCopy.splice(index, 1);
        setCheckins(checkinsCopy);
    }
    
  const [checkins,setCheckins] = useState([
    {
      key:"1",
      activity:"Biking",
      location:"Ottawa",
      time:"10h 10mins",
      date:"10/29/2021"
    },
]);

const [contacts,setContacts] = useState([
  {
    key:"1",
    name:"David",
    phone:"111222333",
    email:"test@gmail.com",
    priority:"1"
  }
]);

const [settings,setSettings] = useState({name:"Kian",phone:"111222333",email:"test@gmail.com"});


  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home">
          {props => <Home data={checkins} changeData={setCheckins} screenName={"Checkins"}/>}
          </Stack.Screen>

        <Stack.Screen name="Checkins">
          {props => <Checkins data={checkins} changeData={setCheckins}/>}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {props => <Settings data={settings} changeData={setSettings}/>}
        </Stack.Screen>

        <Stack.Screen name="Contacts">
          {props => <Contacts data={contacts} changeData={setContacts}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
