import React from "react";

import { View, Text, StyleSheet , Image} from "react-native";

export const ContactsScreen = (props) => {
    return(
        <View>
            <Text> Your Contacts</Text>
            
            <View style={styles.item}>
            
                <View style={styles.itemLeft}>
                    <Text style={styles.itemText}>
                    {"Name: "+props.name}
                    </Text>

                    <Text style={styles.itemText}>
                    {"Phone Number: "+props.number}
                    </Text>

                    <Text style={styles.itemText}>
                    {"Email: "+props.email}
                    </Text>
                </View>
                {/* PLEASE CHANGE IMAGE PATH WHEN RUNNING THE APP */}
                <Image style ={styles.image} source={require('/Users/sabee/Desktop/GNG2101/gng2101-protoype2/assets/edit-icon.png')} /> 
            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    item: {
        backgroundColor: '#52CC50',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemLeft:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        flexWrap:'wrap'
    },
    itemText:{


    },
    image:{
        flex: 1,
        width: 19,
        height: 19,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginBottom: 35,
        marginLeft: 120,
    },
});

export default ContactsScreen;