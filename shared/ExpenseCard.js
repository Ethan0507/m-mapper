import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ExpenseCard({ item }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
            <Text style={ styles.cardTitle }>{ item.title }</Text>
            <Text style={ styles.cardTitle }>Rs. { item.amount }</Text>
            </View>
            <Text>{ item.date }</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        elevation: 3,
    },
    cardTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 12,
        flex: 1,
    },
    cardTitleContainer: {
        flexDirection: 'row',
    }
})