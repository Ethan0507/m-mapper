import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {  MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';


export default function CamScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isLoaded, setLoaded] = useState(true);


    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    React.useEffect(
        () => navigation.addListener('blur', () => setLoaded(false) ),
        []
      );
    React.useEffect(
        () => navigation.addListener('focus', () => setLoaded(true) ),
        []
      );

    const pickDocument = async() => {
        let result = await DocumentPicker.getDocumentAsync({
          type: "*/*"
        });
    
        console.log(result.uri);
        alert("Image added Successfully");
    }
 
    if (hasPermission === null) {
        return <View/>;
    }
    else if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    else if(isLoaded==true){
      return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                setCameraRef(ref);
                }} autoFocus= "on">
                <View  style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:40  }}>
                        <TouchableOpacity
                                style={{
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                backgroundColor: 'transparent',                  
                                }}
                                onPress={pickDocument}
                                >
                        <MaterialCommunityIcons name="folder-multiple" size={40} color="#ffffff"/>
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={{
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                backgroundColor: 'transparent',                  
                                }}
                            onPress={async() => {
                                if(cameraRef){
                                let photo = await cameraRef.takePictureAsync('photo');
                                console.log('photo', photo);
                                navigation.navigate('Image',{'photo':photo});
                                }
                        }}>
                        <MaterialCommunityIcons name="circle-outline" color='#ffffff'size = {70} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                backgroundColor: 'transparent',                  
                                }}
                            onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                            );
                            }}>
                         <MaterialCommunityIcons name="camera-switch" color='#ffffff'size = {40} />
                        </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
else {
    return <Text>not loaded</Text>;
}
}