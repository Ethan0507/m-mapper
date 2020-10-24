import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import History from "../screens/History";
import BudgetDetails from "../screens/BudgetDetails";

const screens = {
    History: {
        screen: History,
        navigationOptions: {
            title: 'History'
        }
    },
    BudgetDetails: {
        screen: BudgetDetails,
        nsvigationOption: {
            title: 'Budget Details'
        }
    }
}

const HistoryStack = createStackNavigator(screens);

export default HistoryStack;