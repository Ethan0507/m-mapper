import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import AddExpense from '../screens/AddExpense';
import HistoryStack from './HistoryStack';
import HomeStack from './HomeStack';
import CameraStack from './AddExpenseStack';
import AddExpenseStack from './AddExpenseStack';

const BottomBarNavigator = createMaterialBottomTabNavigator({
    Home: { 
        screen: HomeStack,  
        navigationOptions:{  
            tabBarLabel:'Home',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                </View>),  
        }  
    },
    Add: {
        screen: AddExpenseStack,
        navigationOptions:{  
            tabBarLabel:'Add',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-add-circle'}/>  
                </View>),  
        }  
    },
    History: {
        screen: HistoryStack,
        navigationOptions:{  
            tabBarLabel:'History',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-time'}/>  
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