import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer , DarkTheme  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AddExpense from '../screens/AddExpense';
import HistoryStack from './HistoryStack';
import HomeStack from './HomeStack';
import CameraStack from './CameraStack';
//import { DarkTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="home"    tabBarOptions={ { style:{height:60 }, keyboardHidesTabBar: 'true',activeTintColor: '#99ff99',inactiveTintColor:'#447744', tabStyle:{padding:10} , labelStyle: {fontFamily: 'Montserrat', fontSize : 10 } }} >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={AddExpense}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryStack}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color= {color} size= {size} />
          ),
        }}
      />
      <Tab.Screen
        name="camera"
        component={CameraStack}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera-plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function BottomNav() {
  return (
    <NavigationContainer theme = {DarkTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}
