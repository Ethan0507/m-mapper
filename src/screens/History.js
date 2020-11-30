import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// import firebase from 'firebase';
// import firebaseApp from '../../FirebaseConfig';
// import AsyncStorage from '@react-native-community/async-storage'

import BudgetCard from '../shared/BudgetCard';
import { globalStyles } from '../styles/GlobalStyles';

export default function History({ navigation }) {

    // const db = firebaseApp.firestore();

    // const [budget, setBudget] = React.useState();
    // const [expense, setExpense] = React.useState();
    // const [expenses, setExpenses] = React.useState();
    // const allBudget = [];

    // const saveBudgetId = async budgetId => {
    //     try {
    //       await AsyncStorage.setItem('budgetId', budgetId);
    //       return "Saved";
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //     return "Done";
    //   };

    
    // const removeBudgetId = async () => {
    //     try {
    //         await AsyncStorage.removeItem('budgetId');
    //         return "Removed";
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    //     return "Done";
    // }


    // React.useEffect(async () => {

    //     db.collection("budgets").onSnapshot(snapshot => {
    //         var activeBudgets = snapshot.docs.map(s => s.data());
    //         console.log(activeBudgets);
    //         setBudget("hello");
    //         console.log("addBudget");
    //         addBudget = Object.entries(activeBudgets);
    //         console.log("below");
    //         console.log(addBudget);

    //     });

        

    // }, []);
    

    const budgetList = [
        {
            title: "Budget 4",
            amount: 15000.00,
            date: "14-09-2020",
            key: "1",
            expense:[
                {title: "Grocery",
                date:"09-09-2020",
                amount:3562.00
            },
            {title:"Shoes",
                date:"10-09-2020",
                amount:2000.00
            },
            {title: "Shirt",
                date:"10-09-2020",
                amount:1200.00
            },
            {title: "Netflix Subscription",
                date:"13-09-2020",
                amount: 499.00
            }
            ],
            totalExpense: 7261.00
            
        },
        {
            title: "Budget 3",
            amount: 1000.00,
            date: "23-09-2020",
            key: "2",
            expense:[
                {title:"Amul milk",
                date:"16-09-2020",
                amount:23.00
            },
            {title:"Pendrive",
                date:"18-09-2020",
                amount:724.00
            },
            {title:"Phone Cover",
                date:"18-09-2020",
                amount:100.00
            },
            {title:"Phone Charger",
                date:"18-09-2020",
                amount:449.00
            }
            ],
            totalExpense: 1296.00
        },
        {
            title: "Budget 2",
            amount: 10000.00,
            date: "28-09-2020",
            key: "3",
            expense:[
                {title:"HouseHold",
                date:"24-09-2020",
                amount:5322.00
            },
            {title: "Apples",
                date:"25-09-2020",
                amount:90.00
            },
            {title:"Stationary",
                date:"25-09-2020",
                amount:162.00
            },
            {title:"Phone recharge",
                date:"27-09-2020",
                amount:799.00
            },
            {title:"Dominos",
                date:"27-09-2020",
                amount:150.00
            }
            ],
            totalExpense: 6523.00
        },
        {
            title: "Budget 1",
            amount: 3000.00,
            date: "05-10-2020",
            key: "4",
            expense:[
                {title:"Oranges",
                date:"30-09-2020",
                amount:80
            },
            {title:"Boat Earphones",
                date:"01-10-2020",
                amount:1499.00
            },
            {title:"Grocery",
                date: "03-10-2020",
                amount:253.00
            }
            ],
            totalExpense:1832.00
        }
    ];

    return (
        <View style={globalStyles.container}>
            <Text style = {{ color: '#ffffff'}} >
                
            </Text>
            <FlatList 
                data={ budgetList }
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BudgetDetails', {title: item.title, amount: item.amount, date:item.date, expense:item.expense, total:item.totalExpense})}>
                        <BudgetCard item={ item } />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};