import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Keep working hard!"
			}
			else {
				return "Time to work!"
			}	
		}
		else {
			if(this.props.running === true) {
				return "It's break time! Enjoy"
			}
			else {
				return "Relax :)"
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.textStyle}>{texttoshow}</Text>
		)				
	}
}

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

export default TimerHeader;