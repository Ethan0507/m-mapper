import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function BudgetDetails({ navigation }) {
    return (
        <View>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('amount') }</Text>
            <Text>{ navigation.getParam('date') }</Text>
        </View>
    );
}