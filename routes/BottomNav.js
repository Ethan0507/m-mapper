import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import AddExpense from '../screens/AddExpense';
import Home from '../screens/Home';
import History from '../screens/History';

const BottomBarNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home
    },
    History: {
        screen: History
    },
    Add: {
        screen: AddExpense
    }
});

export default createAppContainer(BottomBarNavigator);