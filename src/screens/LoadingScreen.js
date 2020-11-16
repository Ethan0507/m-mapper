import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#333"
    }});

const LoadingScreen = ({ navigation }) => {

    const checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigation.navigate('BottomNav');
            } else {
                navigation.navigate('LoginScreen');
            }
        })
    }


    React.useEffect(() => {
        checkIfLoggedIn();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}

export default LoadingScreen;