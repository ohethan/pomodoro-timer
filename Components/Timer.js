import React from 'react'
import { StyleSheet, Text, } from 'react-native'

export default Timer = ({timeLeft}) => {
  return (
    <Text style={styles.timer}>{Math.floor(timeLeft / 60000)} : {timeLeft % 60000 / 1000 < 10 ? '0' + timeLeft % 60000 / 1000 : timeLeft % 60000 / 1000}</Text>
  )
}

const styles = StyleSheet.create({
  timer: {
    color: '#FFF',
    fontSize: 96,
  }
})
