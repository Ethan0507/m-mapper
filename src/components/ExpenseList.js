import React from 'react';

import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ExpenseCard from '../shared/ExpenseCard';
import { globalStyles } from '../styles/GlobalStyles';



const ExpenseList = ({ expenses }) => {
    return (
        <>
        <Text style={globalStyles.titleText}>Expenses</Text>

        {expenses !== undefined && expenses !== null && 
        <FlatList
            data={ expenses }
            renderItem={({ item }) => (
                <ExpenseCard item={ item }
                    />
            )}
            keyExtractor={(item, i) => i}
        />}

        {expenses === undefined && <Text style={globalStyles.subText}>Hurray! You haven't spent much yet.</Text>}

        </>
    )
}


export default ExpenseList;