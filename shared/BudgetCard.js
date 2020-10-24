import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function BudgetCard({ item }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{ item.title }</Text>
                <Text style={styles.cardTitle}>Budget: { item.amount } ₹</Text>
            </View>
            <Text>   Date: { item.date }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        
        borderWidth: 0.5,
        borderRadius: 5,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        padding: 10,
        backgroundColor: '#b3daff',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 0,
        marginVertical: 3,
        elevation: 0,
    },
    cardTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 15,
        flex: 1,
        marginHorizontal: 10,
        color:'#222255',
    },
    cardTitleContainer: {
        flexDirection: 'row',
    }
});