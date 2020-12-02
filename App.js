import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import CounterText from './components/CounterText';

export default function App() {
	let [ feedback, setFeedback ] = useState(' ');
	const [ count, setCount ] = useState(0);

	const increase = () => {
		if (count % 10 == 0) {
			setFeedback((feedback = 'Good Job!'));
			console.log('Hello World!');
		} else {
			setFeedback((feedback = ' '));
		}
		setCount(count + 1);
	};
	function decrease() {
		setCount(count - 1);
	}

	const reset = () => setCount(count - count);
	return (
		<View style={styles.container} onStartShouldSetResponder={increase}>
      
			<View>
				<Text style={styles.text}>{feedback}</Text>
			</View>
			<View>
				<CounterText color="lightgrey" fontSize={10}>
					{count}
				</CounterText>
				<CounterText color="lightblue" fontSize={30}>
					{count}
				</CounterText>
				<CounterText color="blue" fontSize={60}>
					{count}
				</CounterText>
				<CounterText color="navy" fontSize={90}>
					{count}
				</CounterText>
				<Text style={styles.counter}>Counter : {count}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={increase} style={styles.button}>
					<Text>Increase</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={decrease} style={styles.button}>
					<Text>Decrease</Text>
				</TouchableOpacity>
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
