import React from 'react'
import {
    View,
    Text,
    StyleSheet
}from 'react-native'

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