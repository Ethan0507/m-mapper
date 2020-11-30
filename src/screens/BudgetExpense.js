import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { AppLoading } from 'expo';

import {  useFonts, DarkerGrotesque_700Bold } from '@expo-google-fonts/darker-grotesque';


export default function BudgetExpense({ item }) {

    
    return (
        <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}> { item.title }</Text>
                <Text style={styles.cardTitle}> ₹ { item.amount }</Text>
               
            </View>
            <Text style={styles.cardTitle}> { item.date }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'rgb(255,255,255)',
        fontSize: 30,
        fontFamily: 'DarkerGrotesque_700Bold',
        margin: 30,
    },
    card:{
        flex: 1,
        padding: 8,
        margin: 3,
        borderRadius:10,
        backgroundColor: 'rgb(55,55,55)',
    },
    cardTitle:{
        color: 'rgb(255,255,255)',
        fontSize: 20,
        fontFamily: 'DarkerGrotesque_700Bold',
        margin: 5,
        marginRight:20
    },
    cardTitleContainer: {
        flexDirection: 'row',
    }
});