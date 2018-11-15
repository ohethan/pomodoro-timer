import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Constants} from 'expo'
import TimeSelector from './Components/TimeSelector'
import TimerContainer from './Components/TimerContainer'

export default class App extends React.Component {
  state = {
    studyTime: 25,
    breakTime: 5,
    isStudyTime: true,
  }

  onStudyChange = (newStudyTime) => {
    this.setState({
      studyTime: newStudyTime
    })
  }

  onBreakChange = (newBreakTime) => {
    this.setState({
      breakTime: newBreakTime
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pomodoro Timer</Text>
        <TimeSelector 
          studyTime={this.state.studyTime}
          onStudyChange={this.onStudyChange}
          breakTime={this.state.breakTime}
          onBreakChange={this.onBreakChange}>
        </TimeSelector>
        <TimerContainer 
          studyTime={this.state.studyTime}
          breakTime={this.state.breakTime}
          isStudyTime={this.state.isStudyTime}>
        </TimerContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
})
