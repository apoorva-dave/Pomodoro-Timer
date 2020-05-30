import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
		marginTop: "7%",
	    marginBottom: "10%",
	    marginLeft: "7%",
	    marginRight: "7%",
	    padding: "20%",
	    borderColor: "white",
	    borderRadius: 80,
	    borderWidth: 5,
		alignItems: 'center',
		backgroundColor: "#C2362B",
	},
	textStyle: {
		color: "white",
	    fontSize: 50,
	    fontWeight: "400",
	}
})