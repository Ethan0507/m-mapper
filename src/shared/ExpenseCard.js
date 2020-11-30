import React , { useState } from 'react';
import { StyleSheet,Alert,Modal,TouchableHighlight, View, Text,TouchableOpacity } from 'react-native';


export default function ExpenseCard({ item }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>  

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{ item.paidTo }</Text>
                    <Text style={styles.modalText}>{ item.amount }</Text>
                    <Text style={styles.modalText}>{ item.date }</Text>

                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#00bb00" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>

           <TouchableOpacity
            onPress={() => {
                setModalVisible(!modalVisible);
            }}>  
              <View style={styles.cardTitleContainer}>
                <Text style={ styles.cardTitle }>{ item.paidTo }</Text>
                <Text style={ amnt }>₹ { item.amount }</Text>
            </View>
            <Text style = {{color: '#555555'}}>  { item.date }</Text> 
           </TouchableOpacity>
            
        </View> 
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderBottomWidth: 0.7,
        borderBottomColor: '#555555',
       // borderBottomLeftRadius: 100,
        //borderTopRightRadius: 50,
        //borderWidth: 0.5,
        //borderRadius: 5,
        // shadowOffset: {
        //     width: 1,
        //     height: 3,
        // },
        
        paddingHorizontal: 20,
        paddingTop:10,
        paddingBottom:20,
        backgroundColor: 'rgb(23,23,23)',
        //shadowColor: '#333',
        //shadowOpacity: 0.3,
        //shadowRadius: 2,
        marginHorizontal: 0,
        marginVertical: 0,
        //elevation: 0,
    },
    cardTitle: {
        fontFamily: 'poppins-regular',
       // fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        marginHorizontal: 10,
        color:'#dddddd',

    },
    cardTitleContainer: {
        flexDirection: 'row',

    },
    cardRight:{
        textAlign: 'right',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      },
    modalView: {
        margin: 20,
        //padding:20,

        backgroundColor: "rgb(200,200,200)",
        borderRadius: 20,
        paddingHorizontal: 65,
        paddingVertical:30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
          marginTop:20,
        backgroundColor: "#FF84FF",
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical:7,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        fontSize:15,
        fontWeight: "bold",
        textAlign: "center"
      }

})

const amnt = StyleSheet.compose(styles.cardTitle, styles.cardRight);