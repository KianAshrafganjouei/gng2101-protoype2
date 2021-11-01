import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
}from 'react-native'
import {Formik} from 'formik'
const Chcekins = (props)=>{
    return(
        <View style={StyleSheet.container}>
          <Text>check</Text>
        </View>
    )
}

export default Chcekins;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})