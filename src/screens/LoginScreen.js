import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

import firebaseApp from '../../FirebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation }) => {

  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  function onSignIn(idToken, accessToken, googleUser) {
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          idToken,
          accessToken
        );
        firebase.auth().signInWithCredential(credential).then(
          (result) => {
            const db = firebaseApp.firestore();
            if (result.additionalUserInfo.isNewUser) {
              db.collection('users').doc(result.user.uid).set({
                gmail: result.user.email,
                profile_picture: result.additionalUserInfo.profile.picture,
                locale: result.additionalUserInfo.profile.locale,
                first_name: result.additionalUserInfo.profile.given_name,
                last_name: result.additionalUserInfo.profile.family_name,
                created_at: Date.now()
              });
            } else {
              db.collection('users').doc(result.user.uid).update({
                last_logged_in: Date.now()
              });
            }
          }
        )
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          // ...
        });
      }
    });
  }


  
  

  const signIn = async() => {
    const config = {
      androidClientId: `634804316910-ktb33fj2l184l953c8n73ttcqs3qvgbg.apps.googleusercontent.com`
    };
    const { type, accessToken, idToken, user } = await Google.logInAsync(config);
    
    if (type === 'success') {
      onSignIn(idToken, accessToken, user);
      navigation.navigate('BottomNav');
    }
  }


    return (
        <View style={{ paddingVertical:400, alignContent:'center',  justifyContent : 'center', backgroundColor:'#333'}}>

<Image source = {require('../components/img/menuicon.png')} style ={{height: 150, width: 150, alignSelf: 'center'}}/>

              <Text style = {{color:'#fff', fontSize:20 , fontFamily: 'serif', marginVertical:12, alignSelf: 'center'}}>Welcome to CashFlow!</Text>

            <TouchableOpacity
            onPress = {signIn}
            style = {{ alignItems: 'center', justifyContent: 'center', flexDirection:'row', backgroundColor:'#0492c2',padding: 10, borderRadius:6, marginHorizontal:40 }}
            >
              <Image source = {require('../components/img/google.png')} style ={{height: 30, width: 30}}/>
              <Text style = {{color:'#fff', fontSize:18 }}>  Sign In with Google!</Text>

            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;