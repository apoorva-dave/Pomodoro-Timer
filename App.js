import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import Header from './src/components/Header'
import PomodoroTimer from './src/components/PomodoroTimer'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <PomodoroTimer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
