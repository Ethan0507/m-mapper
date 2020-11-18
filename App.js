import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import BottomNav from './src/routes/BottomNav';

import { firebaseApp } from './FirebaseConfig';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
});

const AppSwitch = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  BottomNav: BottomNav
});

const AppNavigator = createAppContainer(AppSwitch);

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <>
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoaded(true)}
      />
      <LoadingScreen />
      </>
    );
  }

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
