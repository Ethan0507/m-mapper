import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { AppLoading } from 'expo';
import { FlatList } from 'react-native-gesture-handler';


import {  useFonts, DarkerGrotesque_700Bold } from '@expo-google-fonts/darker-grotesque';
import BudgetExpense from './BudgetExpense';



export default function BudgetDetails({ route, navigation }) {

    const { title } = route.params;
    const { amount } = route.params;
    const { date } = route.params;
    const { total } = route.params;
    const { expense } = route.params;


    let [fontsLoaded] = useFonts({DarkerGrotesque_700Bold, });    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {

    return (
        <View style = {styles.card}>
            <Text style={styles.text}>Title : {title}</Text>
            <Text style={styles.text}>Date : {date}</Text>
            <Text style={styles.text}>Amount : {amount}</Text>
            <Text style={styles.text}>Total : {total}</Text>
            <Text style = {{margin:4}}></Text>
            <FlatList 
                data={ expense }
                renderItem={({ item }) => (
                        <BudgetExpense item={ item } />
                
                )}
            />
        </View>
    );
}
}
const styles = StyleSheet.create({
    text: {
        color: 'rgb(255,255,255)',
        fontSize: 25,
        fontFamily: 'DarkerGrotesque_700Bold',
        margin: 10,
    },
    card:{
        
        padding: 2,
        margin: 10,
        borderRadius:10,
        backgroundColor: 'rgb(33,33,33)',
    }
});