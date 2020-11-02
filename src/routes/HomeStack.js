import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";

const Stack = createStackNavigator();
// const config = {
//     animation: 'spring',
//     config: {
//       stiffness: 1000,
//       damping: 500,
//       mass: 3,
//       overshootClamping: true,
//       restDisplacementThreshold: 0.01,
//       restSpeedThreshold: 0.01,
//     },
//   };

function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="CashFlow"  >
        <Stack.Screen  name="CashFlow" component={Home} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular', },}} />
      </Stack.Navigator>
  );
} 

export default HomeStack;
