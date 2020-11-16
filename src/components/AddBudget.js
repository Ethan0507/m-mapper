import React, { useState }  from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';

import { globalStyles } from '../styles/GlobalStyles';
import firebaseApp from '../../FirebaseConfig';

const AddBudget = () => {

    const db = firebaseApp.firestore();

    let [month, day, year]    = new Date().toLocaleDateString("en-US").split("/")

    return (
        <>
        
        <Text style={globalStyles.titleText}>No budget active.</Text>
        <View style={styles.addContainer}>
            <Text style={globalStyles.smalltext}>Seems like you don't have an active budget set, yet. Add a budget below to track your expenses.</Text>
        </View>
        <Formik
                initialValues={{ budget: "", endDate: "", expense: 0, active: true }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    db.collection("budgets").add(values);
                }}
            >
                {( props ) => (
                    <View>
                        <TextInput
                            placeholder="Budget amount"
                            onChangeText={props.handleChange('budget')}
                            value={props.values.budget}
                            keyboardType="numeric"
                            style = {styles.tinput}
                            placeholderTextColor = "#888888"

                        />

                        <DatePicker
                            mode="date"
                            date={props.values.endDate}
                            value={props.values.endDate}
                            format="YYYY-MM-DD"
                            placeholder="Select end-date"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            style={datep}
                            minDate={`${year}-${month}-${day}`}
                            onDateChange={props.handleChange('endDate')}
                        />

                        <TouchableOpacity
                            title="submit" 
                            onPress={props.handleSubmit} 
                            style={styles.buttonn}
                        ><Text style= {globalStyles.smalltext}>Submit</Text>
                        </TouchableOpacity>


                    </View>
                )}
            </Formik>
            </>
    )
}

const styles = StyleSheet.create({

    buttonn: {
        alignItems: 'center',
        marginHorizontal: 100,
        marginVertical:20,
        padding: 10,
        backgroundColor: 'rgb(43, 161, 82)',
        color: "#fff",
        borderRadius: 30,

    },

    tinput:{
        marginVertical:15,
        marginHorizontal:20,
        padding:12,
        backgroundColor: 'rgb(40,40,40)',
        borderRadius: 15,
        borderColor:'rgb(100,100,100)',
        borderWidth: StyleSheet.hairlineWidth,
        fontSize: 15,
        color:'rgb(255,255,255)',

    },
    datep:{
        alignSelf:'center',
        padding:2,
        width: 80 +'%'
    },

    addContainer: {
        padding: 10
    },
    Add: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 22
    }
});

const contain = StyleSheet.compose(globalStyles.container, styles.container);
const datep = StyleSheet.compose(styles.tinput, styles.datep);

export default AddBudget;