import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Timer from './Timer'
class PomodoroTimer extends React.Component {
	constructor(props) {
		super(props)
		this.workTime = 25
		this.breakTime = 5
		this.state = {
			intervalType : "Working",
			period : this.workTime 
		}
	}
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break",
				period: this.breakTime
			})
		}
		else
		{
			this.setState({
				intervalType: "Working",
				period: this.workTime
			})	
		}
	}
	render() {
		return (
			<Timer 
				intervalType={this.state.intervalType}
				Oncomplete={this.handleTimerCompleted}
				period={this.state.period}
			/>
			)
	}
}
export default PomodoroTimer;