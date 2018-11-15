import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'

export default Timer = ({timeLeft}) => {
  return (
    <Text>{Math.floor(timeLeft / 60000)} : {timeLeft % 60000 / 1000}</Text>
  )
}