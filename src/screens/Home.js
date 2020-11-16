import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import firebaseApp from '../../FirebaseConfig';

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

    const [budget, setBudget] = React.useState();
    const [expense, setExpense] = React.useState();

    db.collection("budgets").where("active", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let responseData = doc.data();
            let endDate = responseData.endDate.split("-");
            let newDate = new Date(endDate[0], endDate[1] - 1, endDate[2])
            if (newDate < new Date()) {
                db.collection("budgets").doc(doc.id).update({
                    active: false
                });
                setBudget(null);
            } else {
                setBudget(responseData.budget);
                setExpense(responseData.expense);
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        setBudget(null);
    });


    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>
                <ActivityIndicator color="#00ff00" animating={ budget === undefined }/>
            </View>
            {budget !== undefined && budget !== null && <BudgetExpense budget={budget} expense={expense}/>}
            {budget === null && <AddBudget />}
        </View>
    )
}

export default Home;

