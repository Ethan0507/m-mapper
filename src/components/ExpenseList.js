import React from 'react';

import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ExpenseCard from '../shared/ExpenseCard';
import { globalStyles } from '../styles/GlobalStyles';



const ExpenseList = () => {
    const [expenses, setExpenses] = React.useState([
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
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 7
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 8
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 9
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 10
        },
        {
            title: "Drive",
            amount: 2399.00,
            date: "10-20-2020",
            key: 11
        }
    ]);

    return (
        <>
        <Text style={globalStyles.titleText}>Expenses</Text>

        {expenses && <FlatList
            data={ expenses }
            renderItem={({ item }) => (
                <ExpenseCard item={ item }
                    />
            )}
            keyExtractor={(item, i) => i}
        />}

        {!expenses && <Text style={globalStyles.subText}>Hurray! You haven't spent much yet.</Text>}

        </>
    )
}


export default ExpenseList;