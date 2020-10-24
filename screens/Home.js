import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ExpenseCard from '../shared/ExpenseCard';

import { globalStyles } from '../styles/GlobalStyles';


export default function Home() {

    const [expenses, setExpenses] = useState([
        {
            title: "AWS",
            amount: 19000.00,
            date: "19-09-2020",
            key: 1
        },
        {
            title: "GCP",
            amount: 2399.00,
            date: "10-20-2020",
            key: 2
        },
        {
            title: "MongoDB",
            amount: 120.99,
            date: "09-10-2020",
            key: 3
        },
        {
            title: "Firebase",
            amount: 12000.92,
            date: "09-10-2020",
            key: 4
        },
        {
            title: "Azure",
            amount: 2399.00,
            date: "10-20-2020",
            key: 5
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 6
        },
        {
            title: "Drive",
            amount: 2399.00,
            date: "10-20-2020",
            key: 7
        }
    ]);
    
    let expense = 0;
    var month = new Date().getMonth() + 1;

    expenses.forEach((item)=>{
        expense +=item.amount;
    });


    return (
        <View style={globalStyles.container}>
            <View style={{backgroundColor: "lightblue", padding: 10,flexDirection:"row"}}>
                <Text style={globalStyles.subText}>Expense :</Text> 
                <Text style={globalStyles.subText}>{expense}</Text>
            </View>
            <View style={{backgroundColor: "lightblue", padding: 10,flexDirection:"row"}}>
                <Text style={globalStyles.subText}>Budget :</Text> 
                <Text style={globalStyles.subText}> 3000</Text>
            </View>
            <Text style={globalStyles.subText}>Expenses</Text>
            <FlatList 
                data={ expenses }
                renderItem={({ item }) => (
                    <ExpenseCard item={ item } />
                )}
            />
        </View>
    )
}