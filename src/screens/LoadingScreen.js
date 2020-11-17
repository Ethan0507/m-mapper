import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, Image, View } from 'react-native';
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
        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical:400, backgroundColor:'#393939'   }}>
            <Image source = {require('../components/img/menuicon.png')}  style  ={{height: 100, width: 100}} />
            <Text style = {{color:'#0f0', fontSize:20, margin : 10}}> CashFlow</Text>

            <ActivityIndicator size="large" color="#00ff00" ></ActivityIndicator>
        </View>
    );
}

export default LoadingScreen;