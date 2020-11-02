import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { AppLoading } from 'expo';

import {  useFonts, DarkerGrotesque_700Bold } from '@expo-google-fonts/darker-grotesque';


export default function BudgetDetails({ route, navigation }) {

    const { title } = route.params;
    const { amount } = route.params;
    const { date } = route.params;

    let [fontsLoaded] = useFonts({DarkerGrotesque_700Bold, });    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {

    return (
        <View style = {styles.card}>
            <Text style={styles.text}>Title : {title}</Text>
            <Text style={styles.text}>Amount : {amount}</Text>
            <Text style={styles.text}>Date : {date}</Text>
        </View>
    );
}
}
const styles = StyleSheet.create({
    text: {
        color: 'rgb(255,255,255)',
        fontSize: 30,
        fontFamily: 'DarkerGrotesque_700Bold',
        margin: 30,
    },
    card:{
        
        padding: 8,
        margin: 18,
        borderRadius:10,
        backgroundColor: 'rgb(33,33,33)',
    }
});