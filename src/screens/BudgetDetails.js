import React from 'react';
import { StyleSheet,ScrollView, SafeAreaView ,FlatList, View, Button, Text } from 'react-native';
import { AppLoading } from 'expo';
//import { FlatList } from 'react-native-gesture-handler';


import {  useFonts, DarkerGrotesque_700Bold } from '@expo-google-fonts/darker-grotesque';
import BudgetExpense from './BudgetExpense';



export default function BudgetDetails({ route, navigation }) {

    const { title } = route.params;
    const { amount } = route.params;
    const { startDate } = route.params;
    const { date } = route.params;
    const { total } = route.params;
    const { expense } = route.params;


    let [fontsLoaded] = useFonts({DarkerGrotesque_700Bold, });    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {

    return (
       <>

        <View style = {styles.card}>

            <View>
                <Text style={styles.text}>Title : {title}</Text>
                <Text style={styles.subtext}>Start Date : {startDate}</Text>
                <Text style={styles.subtext}>End Date : {date}</Text>
                <Text style={styles.subtext}>Budget : ₹ {amount}</Text>
                <Text style={styles.subtext}>Total : ₹ {total}</Text>    
            </View>
            </View>
          
            <ScrollView>
                
                    {
                        expense.map(item => (
                            <BudgetExpense item={ item } />
                        ))
                    }
            </ScrollView>
          
           
            
            {/* <FlatList 
                //scrollEnabled = {true}
                data={ expense }
                renderItem={({ item }) => (
                        <BudgetExpense item={ item } />
                
                )}
                keyExtractor={item => item.key}
                
            /> */}
            
        
        </>
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
    subtext: {
        color: 'rgb(200,200,200)',
        fontSize: 20,
        fontFamily: 'DarkerGrotesque_700Bold',
        margin: 6,
    },
    container: {
        flex: 1,
      
      },
    card:{
        
        padding: 12,
        margin: 10,
        marginBottom:6,
        borderRadius:10,
        backgroundColor: 'rgb(33,33,33)',
    }
});