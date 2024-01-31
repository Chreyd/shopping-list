import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressHandler} activeOpacity={0.8}>
    <View style={{...styles.btn,...props.style}}>
      <Text  style={styles.btnText}>{props.children}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'grey',
        padding: 9
    },
    btnText:{
        color:'#fff',
        textAlign: 'center',
        fontSize: 17
    }
})