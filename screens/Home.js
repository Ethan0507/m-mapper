import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ExpenseCard from '../shared/ExpenseCard';

import { globalStyles } from '../styles/GlobalStyles';


export default function Home() {

    const expenseList = [
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
        }
    ];

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Page</Text>
            <FlatList
                data={ expenseList }
                renderItem={({ item }) => (
                    <ExpenseCard item={ item } />
                )}
            />
        </View>
    )
}