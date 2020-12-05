import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// import firebase from 'firebase';
// import firebaseApp from '../../FirebaseConfig';
// import AsyncStorage from '@react-native-community/async-storage'

import BudgetCard from '../shared/BudgetCard';
import { globalStyles } from '../styles/GlobalStyles';

export default function History({ navigation }) {


    const budgetList = [
        {
            title: "Budget 4",
            amount: 15000.00,
            startDate: "05-09-2020",
            date: "14-09-2020",
            key: "1",
            expense:[
                {title: "Grocery",
                date:"09-09-2020",
                amount:3562.00,
                key:'1'
            },
            {title:"Shoes",
                date:"10-09-2020",
                amount:2000.00,
                key:'2'
            },
            {title: "Shirt",
                date:"10-09-2020",
                amount:1200.00,
                key:'3'
            },
            {title: "Netflix Subscription",
                date:"13-09-2020",
                amount: 499.00,
                key:'4'
            }
            ],
            totalExpense: 7261.00
            
        },
        {
            title: "Budget 3",
            amount: 1000.00,
            startDate: "16-09-2020",
            date: "23-09-2020",
            key: "2",
            expense:[
                {title:"Amul milk",
                date:"16-09-2020",
                amount:23.00,
                key:'1'
            },
            {title:"Pendrive",
                date:"18-09-2020",
                amount:724.00,
                key:'2'
            },
            {title:"Phone Cover",
                date:"18-09-2020",
                amount:100.00,
                key:'3'
            },
            {title:"Phone Cover",
                date:"18-09-2020",
                amount:100.00,
                key:'4'
            },
            {title:"Phone Cover",
                date:"18-09-2020",
                amount:100.00,
                key:'5'
            },
            {title:"Phone Cover",
                date:"18-09-2020",
                amount:100.00,
                key:'6'
            },
            {title:"Phone Charger",
                date:"18-09-2020",
                amount:449.00,
                key:'7'
            }
            ],
            totalExpense: 1296.00
        },
        {
            title: "Budget 2",
            amount: 10000.00,
            startDate: "23-09-2020",
            date: "28-09-2020",
            key: "3",
            expense:[
                {title:"HouseHold",
                date:"24-09-2020",
                amount:5322.00,
                key:'1'
            },
            {title: "Apples",
                date:"25-09-2020",
                amount:90.00,
                key:'2'
            },
            {title:"Stationary",
                date:"25-09-2020",
                amount:162.00,
                key:'3'
            },
            {title:"Phone recharge",
                date:"27-09-2020",
                amount:799.00,
                key:'4'
            },
            {title:"Dominos",
                date:"27-09-2020",
                amount:150.00,
                key:'5'
            }
            ],
            totalExpense: 6523.00
        },
        {
            title: "Budget 1",
            amount: 3000.00,
            startDate: "30-09-2020",
            date: "05-10-2020",
            key: "4",
            expense:[
                {title:"Oranges",
                date:"30-09-2020",
                amount:80,
                key:'1'
            },
            {title:"Boat Earphones",
                date:"01-10-2020",
                amount:1499.00,
                key:'2'
            },
            {title:"Grocery",
                date: "03-10-2020",
                amount:253.00,
                key:'3'
            }
            ],
            totalExpense:1832.00
        }
    ];

    return (
        <View style={globalStyles.container}>
            <Text style = {{ color: '#ffffff'}} ></Text>

            <FlatList 
                data={ budgetList }
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BudgetDetails', {title: item.title, amount: item.amount, startDate: item.startDate, date:item.date, expense:item.expense, total:item.totalExpense})}>
                        <BudgetCard item={ item } />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};