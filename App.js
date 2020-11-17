import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
<<<<<<< Updated upstream
=======
import BottomNav from './src/routes/BottomNav';

import { firebaseApp } from './FirebaseConfig';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';

>>>>>>> Stashed changes

import Navigator from './routes/BottomNav';

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
<<<<<<< Updated upstream
  });
=======
});

const AppSwitch = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  BottomNav: BottomNav
});
>>>>>>> Stashed changes


export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoaded(true)}
      />
    );
  }

  return (
    <Navigator />
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
