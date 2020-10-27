import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, PermissionsAndroid, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from 'react-native-paper';


import { globalStyles } from '../styles/GlobalStyles';



export default function AddExpense() {

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
        </View>
    )

    
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#333",
        color: "#fff"
    }
});