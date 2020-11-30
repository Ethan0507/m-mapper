import React from 'react';
import { View,Text, Button, StyleSheet,DrawerLayoutAndroid,Image, ActivityIndicator } from 'react-native';

import firebase from 'firebase';
import firebaseApp from '../../FirebaseConfig';
import AsyncStorage from '@react-native-community/async-storage';




import { globalStyles } from '../styles/GlobalStyles';
import BudgetExpense from '../components/BudgetExpense';
import AddBudget from '../components/AddBudget';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#333"
    },
    navigationContainer: {
      flex: 1,
     
      paddingTop: 50,
      backgroundColor: "#327533",
      padding: 8
    }
});

const Home = () => {
    
    const db = firebaseApp.firestore();

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, emailVerified;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
     
    };
    console.log(name);

    let responseObj = {
        docId: null,
        docData: null
    };

    const [budget, setBudget] = React.useState();
    const [expense, setExpense] = React.useState();
    const [expenses, setExpenses] = React.useState();
    const [profile, setProfile] = React.useState();

    const saveBudgetId = async budgetId => {
        try {
          await AsyncStorage.setItem('budgetId', budgetId);
          return "Saved";
        } catch (error) {
          console.log(error.message);
        }
        return "Done";
      };

    
    const removeBudgetId = async () => {
        try {
            await AsyncStorage.removeItem('budgetId');
            return "Removed";
        } catch (error) {
            console.log(error.message);
        }
        return "Done";
    }


    React.useEffect(() => {
        (async () => {
        db.collection("budgets").onSnapshot(snapshot => {

            var activeBudgets = snapshot.docs.filter(s => s.data().active === true);
            if (activeBudgets.length === 0) {
                setBudget(null);
            } else {
                activeBudgets.map(async (curr) => {
                    let currData = curr.data();
                    let endDate = currData.endDate.split("-");
                    let currDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);
                    let res;
                    if (currDate <= new Date()) {
                        db.collection("budgets").doc(curr.id).update({ active : false});
                        res = await removeBudgetId();
                        setBudget(null);
                    } else {
                        res = curr.id;
                        setBudget(currData.budget);
                        setExpense(currData.totalExpense);
                        setExpenses(currData.expenses);
                    }
                    res = await saveBudgetId(res);
                })
            }
        })})();
    }, []);

    const navigationView = (
        <View style={styles.navigationContainer}>
            <Image
                style={{   width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    overflow: "hidden",
                    borderWidth: 3,
                    borderColor: "white", alignSelf: "center"}}
                source={{
                uri: photoUrl,
                }}
            />
            <Text style={{color:"white", marginTop: 10, fontSize: 20 , alignSelf: "center"}}>{name}</Text>
            <Text style={{color:"white", margin: 20, fontSize: 15, alignSelf: "center" }}>{email}</Text>
            <Button
               color = "#000000"
               margin = "20"
                onPress = {() => {
                    firebase.auth().signOut();
                    //alert("hello");
                }}  
                title="Sign out"/>
        </View>
      );
    
    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={() => navigationView}
            >
                <View style={globalStyles.container}>
                    <View style={styles.container}>
                        <ActivityIndicator color="#00ff00" animating={ budget === undefined }/>
                    </View>
                    {budget !== undefined && budget !== null && <BudgetExpense budget={budget} expense={expense} expenses={expenses}/>}
                    {budget === null && <AddBudget />}
                </View>
        </DrawerLayoutAndroid>

    )
}

export default Home;

