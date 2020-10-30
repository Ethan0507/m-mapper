import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, PermissionsAndroid, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import { globalStyles } from '../styles/GlobalStyles';



export default function AddExpense({ navigation }) {

    // const [camOpen, setCamOpen] = useState(false);
    
    return (
        <View style={globalStyles.container}>

            <Formik
                initialValues={{ paidTo: "", description: "", amount: "", date: "" }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                }}
            >
                {( props ) => (
                    <View>
                        <TextInput
                            placeholder="Paid To"
                            onChangeText={props.handleChange('paidTo')}
                            value={props.values.paidTo}
                        />

                        <TextInput
                            placeholder="Description"
                            onChangeText={props.handleChange('description')}
                            value={props.values.description}
                        />

                        <TextInput
                            placeholder="Amount"
                            onChangeText={props.handleChange('amount')}
                            value={props.values.amount}
                            keyboardType="numeric"
                        />

                        <DatePicker
                            mode="date"
                            date={props.values.date}
                            value={props.values.date}
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={props.handleChange('date')}
                        />

                        <Button title="submit" onPress={props.handleSubmit} />

                    </View>
                )}
            </Formik>

            <View style={styles.AddContainer}>
                <Text>Got a receipt to?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Camera') }>
                <Text style={styles.Add}>ADD File <AntDesign name="addfile" size={24} color="black"/></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    AddContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    Add: {
        marginHorizontal: 10,
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 6,
        padding: 10
    }
});