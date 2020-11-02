import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CamScreen from "../screens/CameraScreen";
import ImageScreen from "../screens/ImageScreen";

const Stack = createStackNavigator();

function CameraStack() {
  return (
    //<NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CamScreen} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular'} }} />
        <Stack.Screen name="Image" component={ImageScreen} options={{headerTitleStyle: { fontSize: 30, fontFamily: 'poppins-regular'} }} />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}

export default CameraStack;
