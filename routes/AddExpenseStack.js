import React from 'react';

import CameraScreen from "../screens/CameraScreen";
import ImageScreen from "../screens/ImageScreen";
import { createStackNavigator } from 'react-navigation-stack';
import AddExpense from '../screens/AddExpense';

const screens = {   
    AddExpense: {
        screen: AddExpense
    },
    Camera: {
        screen: CameraScreen
    },
    Image: {
        screen: ImageScreen
    }
};

const AddExpenseStack = createStackNavigator(screens);

export default AddExpenseStack;