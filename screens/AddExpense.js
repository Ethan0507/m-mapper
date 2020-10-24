import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { globalStyles } from '../styles/GlobalStyles';

export default function AddExpense() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Add a new expense Page</Text>
        </View>
    )
}