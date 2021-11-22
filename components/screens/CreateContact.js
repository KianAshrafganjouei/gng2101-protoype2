
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native'
import { Formik } from 'formik'
const CreateContact = ({ changeData }) => {
    return (
        <View style={StyleSheet.container}>
            <Formik initialValues={{ Name: '', Email: '', PhoneNumber: '' }} onSubmit={(values) => { changeData(values) }}>
                {(props) => (
                    <View>
                        <TextInput
                            placeholder='Contact Name'
                            onChangeText={props.handleChange('Name')}
                            value={props.values.Activity}
                        />
                        <TextInput
                            style = {styles.inputStyle}
                            placeholder='Contact Email'
                            onChangeText={props.handleChange('Email')}
                            value={props.values.Location}
                        />
                        <TextInput
                            style = {styles.inputStyle}
                            placeholder='Contact Phone Number'
                            onChangeText={props.handleChange('Date')}
                            value={props.values.Date}
                        />

                        <Button title='Add Emergency Contact' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default CreateContact;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})