import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "../screens/Home";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'M-App₹'
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;