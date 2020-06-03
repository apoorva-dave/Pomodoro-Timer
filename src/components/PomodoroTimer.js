import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'

class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	// handles completion of timer
	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}

	// gets triggered on change of worktimer text
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				workTime: 25
			})
		}
	}

	// gets triggered on change of breaktimer text
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Time invalid. Setting value to default. Please enter valid time")
			this.setState({
				breakTime: 5
			})
		}
	}

	// called to set the timer's time
	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
			<View>
				<View style={styles.row}>
					<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>WorkTime</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime} placeholder = "workTime in mins" onChangeText={this.handleWorkTime} />
					</View>
					<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>BreakTime</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} placeholder = "breakTime in mins" onChangeText={this.handleBreakTime} />
					</View>
				</View>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
			</View>
			)
	}
}
export default PomodoroTimer;

const styles = StyleSheet.create({
   row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20
  }
});