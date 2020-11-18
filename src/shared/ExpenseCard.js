import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';


export default function ExpenseCard({ item }) {
    return (
        <View style={styles.card}>
            <TouchableOpacity>
            <View style={styles.cardTitleContainer}>
                <Text style={ styles.cardTitle }>{ item.paidTo }</Text>
                <Text style={ amnt }>₹ { item.amount }</Text>
            </View>
            <Text style = {{color: '#555555'}}>   { item.date }</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderBottomWidth: 0.7,
        borderBottomColor: '#555555',
       // borderBottomLeftRadius: 100,
        //borderTopRightRadius: 50,
        //borderWidth: 0.5,
        //borderRadius: 5,
        // shadowOffset: {
        //     width: 1,
        //     height: 3,
        // },
        
        paddingHorizontal: 20,
        paddingTop:10,
        paddingBottom:20,
        backgroundColor: 'rgb(23,23,23)',
        //shadowColor: '#333',
        //shadowOpacity: 0.3,
        //shadowRadius: 2,
        marginHorizontal: 0,
        marginVertical: 0,
        //elevation: 0,
    },
    cardTitle: {
        fontFamily: 'poppins-regular',
       // fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        marginHorizontal: 10,
        color:'#dddddd',

    },
    cardTitleContainer: {
        flexDirection: 'row',

    },
    cardRight:{
        textAlign: 'right',
    }

})

const amnt = StyleSheet.compose(styles.cardTitle, styles.cardRight);