import React from 'react';
import { StyleSheet, View, Text,  Easing, TextInput, Animated,} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/GlobalStyles';
import Svg, {G, Circle} from 'react-native-svg';
import ExpenseList from './ExpenseList';


const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



const BudgetExpense = ({ budget, expense, expenses, radius = 50,
   strokeWidth = 10,
   duration=1000,
   color = '#0d0',
   delay = 0,
   textColor,
   max = 100}) => {

    
    var month = new Date().getMonth() + 1;
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
        }).start();
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
        <>
        <View style={{ padding: 20,flexDirection:"row"}}>
            <View style={{ width: radius * 2, height: radius * 2 }}>
                <Svg
                    height={radius * 2}
                    width={radius * 2}
                    viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
                    <G
                    rotation="-90"
                    origin={`${halfCircle}, ${halfCircle}`}>
                    <AnimatedCircle
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
                    <AnimatedCircle
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

            <ExpenseList expenses={expenses}/>
            </>
    )
}


const styles = StyleSheet.create({
    text: { fontSize:20,  fontWeight: '900', textAlign: 'center' },
  });

export default BudgetExpense;