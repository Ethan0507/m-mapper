import * as React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";


export default function ImageScreen({ navigation }) {
 const photo = navigation.getParam("photo");
 
 return (
 <View style={{ flex: 1, alignItems:"center",justifyContent:"center" }}>
 
 <Image source={{ uri: photo.uri }} style={{width:380,height:550}}/>
</View>
 );
}