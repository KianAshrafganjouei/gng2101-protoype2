import React from 'react';
import EditContact from './EditContact';
import { View, Text, StyleSheet , Image, TouchableOpacity} from "react-native";

export const ContactsScreen = (props,{navigation}) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.sectionTitle}> Your Contacts</Text>
            
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
                
                <TouchableOpacity onPress={ ()=> EditContact }>
 
                    <Image source={require('../../assets/edit-icon.png')} style = {styles.ImageClass} />
          
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
        paddingTop:50,
        paddingHorizontal:20
      },
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

    sectionTitle: {
        fontSize: 32,
        fontWeight: "bold",
      },

    ImageClass:{
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