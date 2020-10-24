import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import BudgetCard from '../shared/BudgetCard';
import { globalStyles } from '../styles/GlobalStyles';

export default function History({ navigation }) {

    const budgetList = [
        {
            title: "Budget #1",
            amount: 15000.00,
            date: "14-09-2020",
            key: "1"
        },
        {
            title: "Budget #2",
            amount: 1000.00,
            date: "23-09-2020",
            key: "2"
        },
        {
            title: "Budget #3",
            amount: 10000.00,
            date: "28-09-2020",
            key: "3"
        },
        {
            title: "Budget #4",
            amount: 9000.00,
            date: "05-10-2020",
            key: "4"
        }
    ];

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={ budgetList }
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BudgetDetails', item)}>
                        <BudgetCard item={ item } />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}