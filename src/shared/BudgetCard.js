import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function BudgetCard({ item }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{ item.title }</Text>
                <Text style={styles.cardTitle}> { item.amount }₹</Text>
            </View>
            <Text style={{color:'#999999', fontSize:14, paddingTop:8, paddingLeft: 5}}>   Start Date: { item.startDate }</Text>
            <Text style={{color:'#999999', fontSize:14, paddingTop:8, paddingLeft: 5}}>   End Date: { item.date }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 0,//StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: '#999999',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        padding: 8,
        paddingBottom:20,
        backgroundColor: 'rgb(80,80,80)',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 12,
        marginTop: 12,
        elevation: 0,
    },
    cardTitle: {
        fontFamily: 'poppins-regular',
        fontSize: 18,
        flex: 1,
        marginHorizontal: 15,
        color:'#eeeeee',
    },
    cardTitleContainer: {
        flexDirection: 'row',
    }
});