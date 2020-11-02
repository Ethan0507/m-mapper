import React, { useState } from 'react';
import { StyleSheet, View, Text, Button,  Easing, TextInput, Animated,} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ExpenseCard from '../shared/ExpenseCard';
import { globalStyles } from '../styles/GlobalStyles';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



export default function Home({
   // percentage = (expense*100)/budget,
    radius = 50,
    strokeWidth=10,
    duration=1000,
    color = 'green',
    delay = 0,
    textColor,
    max = 100,
    }) 
{
    const [expenses, setExpenses] = useState([
        {
            title: "AWS",
            amount: 19000.00,
            date: "19-09-2020",
            key: 1
        },
        {
            title: "GCP",
            amount: 2399.00,
            date: "10-20-2020",
            key: 2
        },
        {
            title: "MongoDB",
            amount: 120.99,
            date: "09-10-2020",
            key: 3
        },
        {
            title: "Firebase",
            amount: 12000.92,
            date: "09-10-2020",
            key: 4
        },
        {
            title: "Azure",
            amount: 2399.00,
            date: "10-20-2020",
            key: 5
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 6
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 7
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 8
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 9
        },
        {
            title: "cloud",
            amount: 2399.00,
            date: "10-20-2020",
            key: 10
        },
        {
            title: "Drive",
            amount: 2399.00,
            date: "10-20-2020",
            key: 11
        }
    ]);
    
    let expense = 0;
    let budget = 60000;
    var month = new Date().getMonth() + 1;
    expenses.forEach((item)=>{
        expense +=item.amount;
    });
    let percentage = (expense*100)/budget;

    
    const animated = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef();
    const inputRef = React.useRef();
    const circumference = 2 * Math.PI * radius;
    const halfCircle = radius + strokeWidth;
    const animation = (toValue) => {
        return Animated.timing(animated, {
          delay: 1000,
          toValue,
          duration,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }).start(() => {
          animation( percentage);
        });
      };

    React.useEffect(() => {
        animation(percentage);
        animated.addListener((v) => {
          const maxPerc = 100 * v.value / max;
          const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
          if (inputRef?.current) {
            inputRef.current.setNativeProps({
              text: `${Math.round(v.value)}%`,
            });
          }
          if (circleRef?.current) {
            circleRef.current.setNativeProps({
              strokeDashoffset,
            });
          }
        }, [max, percentage]);
    
        return () => {
          animated.removeAllListeners();
        };
      });
          
    return (
        <View style={globalStyles.container}>
            <View style={{ padding: 20,flexDirection:"row"}}>
            <View style={{ width: radius * 2, height: radius * 2 }}>
                <Svg
                    height={radius * 2}
                    width={radius * 2}
                    viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
                    <G
                    rotation="-90"
                    origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        ref={circleRef}
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap= "round"
                        strokeDashoffset={circumference}
                        strokeDasharray={circumference}
                    />
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="transparent"
                        stroke='#777777'
                        strokeWidth={strokeWidth}
                        strokeLinejoin="round"
                        strokeOpacity=".3"
                    />
                    </G>
                </Svg>
                <AnimatedTextInput
                    ref={inputRef}
                    underlineColorAndroid="transparent"
                    editable={false}
                    defaultValue="0"
                    style={[
                    StyleSheet.absoluteFillObject,
                    { fontSize: radius / 2, color: textColor ?? color },
                    styles.text,
                    ]}
                />
                </View>
            <View>    
            <View style={{ padding: 10,flexDirection:"row"}}>
                <Text style={globalStyles.subText}>Expense :</Text> 
                <Text style={globalStyles.subText}>{expense}</Text>
            </View>
            <View style={{ padding: 10,flexDirection:"row"}}>
                <Text style={globalStyles.subText}>Budget :</Text> 
                <Text style={globalStyles.subText}>{budget}</Text>
            </View> 
            </View>
            </View>
           
            <Text style={globalStyles.titleText}>Expenses</Text>

            <FlatList
                data={ expenses }
                renderItem={({ item }) => (
                    <ExpenseCard item={ item }
                     />
                )}
                keyExtractor={(item, i) => i}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    text: { fontSize:20,  fontWeight: '900', textAlign: 'center' },
  });