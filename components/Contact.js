import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Contact = (props) => {

    return (
        <View style={styles.item}>
            <Text>{"Name: " + props.name}</Text>
            <Text>{"Phone: " + props.phone}</Text>
            <Text>{"Email: " + props.email}</Text>
            <Text>{"Priority: " + props.priority}</Text>

            <View style={styles.itemChange}>
                <View style={styles.delete}>
                    <Text style={styles.text}>Delete</Text>
                </View>
                <View style={styles.edit}>
                    <Text style={styles.text}>Edit</Text>
                </View>
            </View>
        </View>
       
    )

   
}

const styles = StyleSheet.create({
    item: {
        margin:5,
        marginLeft: 15
    },
    text : {
        opacity: 1.0,
    },
    itemChange: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FF0000',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    },
    delete: {
        
        backgroundColor: '#FF0000',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    },
    edit: {

        backgroundColor: '#FF0000',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    }
})
export default Contact;