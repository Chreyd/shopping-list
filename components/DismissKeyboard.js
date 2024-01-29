import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const DismissKeyboard = (props) => {
  return (
    <TouchableWithoutFeedback 
    onPress={()=>Keyboard.dismiss()}
    >
        {props.children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard

