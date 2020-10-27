import React from 'react';

import CameraScreen from "../screens/CameraScreen";
import ImageScreen from "../screens/ImageScreen";
import { createStackNavigator } from 'react-navigation-stack';

const screens = {   
    Camera: {
        screen: CameraScreen
    },
    Image: {
        screen: ImageScreen
    }
};

const CameraStack = createStackNavigator(screens);

export default CameraStack;