import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import firebase from 'firebase';
import firebaseApp from '../../FirebaseConfig';
import AsyncStorage from '@react-native-community/async-storage'


import { globalStyles } from '../styles/GlobalStyles';
import BudgetExpense from '../components/BudgetExpense';
import AddBudget from '../components/AddBudget';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#333"
    }});

const Home = () => {
    
    const db = firebaseApp.firestore();

    let responseObj = {
        docId: null,
        docData: null
    };

    const [budget, setBudget] = React.useState();
    const [expense, setExpense] = React.useState();
    const [expenses, setExpenses] = React.useState();

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


    React.useEffect(async () => {
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
        });
        // db.collection("budgets").where("active", "==", true)
        // .get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         let responseData = doc.data();
        //         let endDate = responseData.endDate.split("-");
        //         let newDate = new Date(endDate[0], endDate[1] - 1, endDate[2])
        //         if (newDate < new Date()) {
        //             db.collection("budgets").doc(doc.id).update({
        //                 active: false
        //             });
        //             setBudget(null);
        //         } else {
        //             saveBudgetId(doc.id);
        //             setBudget(responseData.budget);
        //             setExpense(responseData.totalExpense);
        //             setExpenses(responseData.expenses);
        //         }
        //     });
        //     if (querySnapshot.size === 0) {
        //         setBudget(null);
        //     }
        // })
        // .catch(function(error) {
        //     console.log("Error getting documents: ", error);
        //     setBudget(null);
        // });
    }, []);


    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>
                <ActivityIndicator color="#00ff00" animating={ budget === undefined }/>
            </View>
            {budget !== undefined && budget !== null && <BudgetExpense budget={budget} expense={expense} expenses={expenses}/>}
            {budget === null && <AddBudget />}
        </View>
    )
}

export default Home;

