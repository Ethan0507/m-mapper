import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        // flex: 1,
       // justifyContent:"flex-start",
         padding: 0,
       // backgroundColor: '#333333',

    },
    titleText: {
        fontFamily: 'poppins-bold',
        padding: 10,
        paddingLeft:20,
        fontSize: 20,
        backgroundColor: '#222222',
        //paddingTop:5,
        color: '#eeeeee',
        //borderTopLeftRadius:30,
        //borderTopRightRadius:30,

    },
    subText: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
        margin:2,
        color: '#eeeeee',
        paddingLeft: 20,
    },
    smalltext:{
        
        fontFamily: 'poppins-regular',
        fontSize: 18,
        color: '#eeeeee',
    }
});