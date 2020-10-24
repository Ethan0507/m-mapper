import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import AddExpense from '../screens/AddExpense';
import Home from '../screens/Home';
import History from '../screens/History';

const BottomBarNavigator = createMaterialBottomTabNavigator({
    History: {
        screen: History,
        navigationOptions:{  
            tabBarLabel:'History',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-time'}/>  
                </View>),  
        }  
    },
    Home: { 
        screen: Home,  
        navigationOptions:{  
            tabBarLabel:'Home',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                </View>),  
        }  
    },  
    Add: {
        screen: AddExpense,
        navigationOptions:{  
            tabBarLabel:'Add',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-add-circle'}/>  
                </View>),  
        }  
    }
},
{  
    initialRouteName: "Home",  
    activeColor: '#333333',  
    inactiveColor: '#888',  
    
    barStyle: { backgroundColor: '#ffffff' },  
  },  
  );

export default createAppContainer(BottomBarNavigator);