import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens'
import Home from "./components/screens/Home"
import Checkins from "./components/screens/Checkins"
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator()
export default function App() {
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
    },
    {
      key:"5",
      activity:"Biking",
      location:"Tornoto Trails",
      time:"04:15pm",
      date:"10/29/2021",
    },
    {
      key:"6",
      activity:"Biking",
      location:"Tornoto Trails",
      time:"04:15pm",
      date:"10/29/2021",
    }
]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home">
          {props => <Home data={checkins} screenName={"Checkins"}/>}
          </Stack.Screen>
        <Stack.Screen name="Checkins">
          {props => <Checkins changeData={setCheckins}/>}
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
