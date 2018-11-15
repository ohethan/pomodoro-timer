import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import Timer from './Timer'

export default class TimerContainer extends React.Component {
  state = {
    defaultTimer: this.props.isStudyTime ? this.props.studyTime : this.props.breakTime,
    timeLeft: 0
  }

  componentDidMount() {
    let timerEndTime = new Date(Date.now() + this.state.defaultTimer * 60000)
    let currentTime = new Date()
    this.setState({
      timeLeft: timerEndTime - currentTime,
    })

    setInterval(this.decrement, 1000)
  }

  decrement = () => {
    this.setState(prevState => ({
      timeLeft: prevState.timeLeft - 1000
    }))
  }

  render() {
    if (this.props.isStudyTime) {
      return (
        <View>
          <Text>Study!</Text>
          <Timer timeLeft={this.state.timeLeft}></Timer>
        </View>
      )
    } else {
      return (
        <View>
          <Text>Break!</Text>
          <Timer></Timer>
        </View>
      )
    }
  }
}