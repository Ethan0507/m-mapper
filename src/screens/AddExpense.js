import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, PermissionsAndroid, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as yup from 'yup';
//import { TextInput } from 'react-native-paper';


import { globalStyles } from '../styles/GlobalStyles';



export default function AddExpense({ navigation }) {

    // const [camOpen, setCamOpen] = useState(false);
    
    return (
        <View style={contain}>

            {/* <Text style={{alignSelf:'center', color:'rgb(255,255,255)',paddingBottom:20, fontFamily: 'poppins-regular', fontWeight:'bold', fontSize: 22}}>OR</Text> */}

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
                            style = {styles.tinput}
                            placeholderTextColor = "#888888"
                        />

                        <TextInput
                            placeholder="Description"
                            onChangeText={props.handleChange('description')}
                            value={props.values.description}
                            style = {styles.tinput}
                            placeholderTextColor = "#888888"

                        />

                        <TextInput
                            placeholder="Amount"
                            onChangeText={props.handleChange('amount')}
                            value={props.values.amount}
                            keyboardType="numeric"
                            style = {styles.tinput}
                            placeholderTextColor = "#888888"

                        />

                        <DatePicker
                            mode="date"
                            date={props.values.date}
                            value={props.values.date}
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            //showIcon={false}
                            style={datep}
                            onDateChange={props.handleChange('date')}
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
                <TouchableOpacity style={styles.addContainer} onPress={() => navigation.navigate('Camera') }>
                <Text style={styles.Add}>Got a receipt? <MaterialCommunityIcons name="camera-plus" size={30} color="green" /></Text>
                </TouchableOpacity>
        </View>
    )

    
}

const styles = StyleSheet.create({

    // container: {
    //     paddingTop: 100,
        
    // },
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
        
    },

    addContainer: {
        flex: 1,
        alignItems: 'center',
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
