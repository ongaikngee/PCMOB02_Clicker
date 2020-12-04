import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function CounterText(props) {
//  console.log(props);
 return (
   <Text style={
     [styles.text,
       {
         color: props.color,
         fontSize: props.fontSize,
         marginBottom: props.bottomM,
         borderColor: props.borderC,
         border: 2,
         borderStyle: "solid",
       }
     ]}>
       {props.children}
   </Text>
 )
}

const styles=StyleSheet.create({
   text: {
       fontWeight: "bold",
       textAlign:"center",
   }
})

