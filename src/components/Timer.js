import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import TimerHeader from './TimerHeader'
import TimerDisplay from './TimerDisplay'
import TimerButtons from './TimerButtons'
import {Vibration} from 'react-native'

class Timer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			running: false,
			time: this.props.period * 60
		}
	}

	// gets called when a stream of new props arrive from parent component
	componentWillReceiveProps(nextProps) {
    	this.setState({ running: false, time: nextProps.period * 60 });
		if(this.state.running === true && this.state.time == 0)
		{
			this.handlePlay()
		}
	  }

	render() {
		return (
			<View>
				<TimerHeader
					running={this.state.running}
					intervalType={this.props.intervalType}
				/>
				<TimerDisplay
					time={this.state.time}
				/>
				<TimerButtons
					play={this.handlePlay}
					pause={this.handlePause}
					reset={this.handleReset}
					running={this.state.running}
				/>
			</View>
		)
	}

	// Invoked immediately after update occurs
	componentDidUpdate() {
		if(this.state.running === true && this.state.time == 0)
		{
			clearInterval(this.timerId)
			Vibration.vibrate([500, 500, 500])
			this.props.Oncomplete()

		}
		else if(this.state.running === false)
		{
			clearInterval(this.timerId)
		}
	}

	// gets triggered when Play button is pressed
 	handlePlay = () => {
		this.setState({
			running: true
		})
		this.timerId = setInterval(() =>{
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	}

	//gets triggered when Pause button is pressed
	handlePause = () => {
		clearInterval(this.timerId)
		this.setState({
			running: false
		})
	}

	// gets triggered when Reset button is pressed
	handleReset = () => {	
		clearInterval(this.timerId)
		this.setState({
			running: false,
			time: this.props.period * 60
		})
	}
}

export default Timer;

const styles = StyleSheet.create({
  textStyle: {
    color: "#C2362B",
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20
  }
});

