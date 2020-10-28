import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import * as DocumentPicker from 'expo-document-picker';

import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoaded, setLoaded] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };


  const pickDocument = async() => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*"
    });

    console.log(result.uri);
  }


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationEvents
          onWillFocus={(payload) => setLoaded(true)}
          onDidBlur={(payload) => setLoaded(false)}/>
      {isLoaded && <Camera
        style={{ flex: 1 }}
        type={type}
        ref={ref => {
            setCameraRef(ref);
          }}
      >
        <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:20}}>
            <TouchableOpacity
                style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',                  
                }}
                onPress={pickDocument}
                >
                <Ionicons
                    name="ios-photos"
                    style={{ color: "#fff", fontSize: 40}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
                }}
                onPress={async() => {
                    if(cameraRef){
                    let photo = await cameraRef.takePictureAsync("photo");
                    console.log("photo", photo);
                    navigation.navigate("Image",{"photo":photo});
                    }
                    }}
                >
                <FontAwesome
                    name="camera"
                    style={{ color: "#fff", fontSize: 40}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
                }}
                onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                <MaterialCommunityIcons
                    name="camera-switch"
                    style={{ color: "#fff", fontSize: 40}}
                />
            </TouchableOpacity>
        </View>
      </Camera>}
    </View>
  );
}