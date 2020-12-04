import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import CounterText from './components/CounterText';

export default function App() {
	let [ count, setCount ] = useState(0);
	let [ time, setTime] = useState(0);

	const increase = () => {
		setCount(count + 1);
		// setTime(time + 12);
		console.log(count);

		let nowTime = "";
		if (count == 20){
			console.log(`I am still counting to ${count}.`);
			clearInterval(nowTime);
		}else if (count > 1){
			console.log(`I am counting to ${count}.`);
			nowTime = setInterval(()=>console.log(`Timer in function:.`),1000);
			setTime(nowTime);
			console.log(`Timer: ${nowTime}.`);
		}
	}

	function startTimer(){
		// nowTime + 1;
		// setTime(nowTime);  

		console.log(`Timer in function:.`);
		// return nowTime;
	}

	function decrease() {
		setCount(count - 1);
	}

	const reset = () => {
		setCount(count - count);
		clearInterval();
	}

	function feedback(){
		if ((count%10)==0 && count != 0){
			return "Wow! " + count + " clicks."
		} else {
			return "Tap the screen!"
		}
	}

	function showTime(){
		return time;
	}
	return (
		<View style={styles.container} onStartShouldSetResponder={increase}>
      
			<View>
				<Text style={styles.text}>{feedback()}</Text>
				<Text style={styles.text}>Timer: {showTime()}</Text>
			</View>
			<View>
				<CounterText color="lightgrey" fontSize={10} bottomM={20} borderC="red">
					{count}
				</CounterText>
				<CounterText color="lightblue" fontSize={30} bottomM={30} borderC="orange">
					{count}
				</CounterText>
				<CounterText color="blue" fontSize={60} bottomM = {40} borderC="yellow">
					{count}
				</CounterText>
				<CounterText color="navy" fontSize={90} bottomM = {50} borderC="green">
					{count}
				</CounterText>
				{/* <Text style={styles.counter}>Counter : {count}</Text> */}
			</View>
			<View style={styles.buttonContainer}>
				{/* <TouchableOpacity onPress={increase} style={styles.button}>
					<Text>Increase</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={decrease} style={styles.button}>
					<Text>Decrease</Text>
				</TouchableOpacity> */}
				<TouchableOpacity onPress={reset} style={styles.button}>
					<Text>Reset</Text>
				</TouchableOpacity>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#4D8B31',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20
		// justifyContent: 'center',
		// borderWidth: 10
  },
  header:{
    backgroundColor:"orange",
    borderRadius:25,
    height:"20%",
    width:"80%",
    textAlign:"center",
    padding:10,
    fontSize:30,
  },
	faceContainer: {
		width: 800,
		margin: 20,
		borderWidth: 1,
		borderStyle: 'dashed',
		padding: 40
	},
	text: {
		fontSize: 40,
		color: 'orange'
	},
	counter: {
		color: 'darkgray',
		fontSize: 30
	},
	buttonContainer: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
    justifyContent: 'space-around',
    marginBottom:40,
	},
	button: {
		// width:80,
		fontSize: 40,
		backgroundColor: 'orange',
		padding: 20,
		margin: 10,
		borderRadius: 10
	}
});
