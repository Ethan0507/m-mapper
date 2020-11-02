import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import History from "../screens/History";
import BudgetDetails from "../screens/BudgetDetails";

const Stack = createStackNavigator();

function HistoryStack() {
  return (
    //<NavigationContainer>
      <Stack.Navigator initialRouteName="History">
        <Stack.Screen name="History" component={History} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular'} }} />
        <Stack.Screen name="BudgetDetails" component={BudgetDetails} options={{headerTitleStyle: { fontSize: 25, fontFamily: 'poppins-regular'}} } />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}

export default HistoryStack;
