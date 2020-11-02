import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AddExpense from '../screens/AddExpense';
import CameraScreen from "../screens/CameraScreen";
import ImageScreen from "../screens/ImageScreen";

const Stack = createStackNavigator();

function AddExpenseStack() {
    return (
        <Stack.Navigator initialRouteName="AddExpense">
            <Stack.Screen name="Add New Expense" component={AddExpense} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular'} }} />
            <Stack.Screen name="Camera" component={CameraScreen} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular'} }} />
            <Stack.Screen name="Image" component={ImageScreen} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular'}} } />
      </Stack.Navigator>
    )
}

export default AddExpenseStack;