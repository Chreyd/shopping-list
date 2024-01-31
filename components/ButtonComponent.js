import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
  return (
    <Pressable onPress={props.onPressHandler}>
    <View style={{...styles.btn,...props.style}}>
      <Text  style={styles.btnText}>{props.btnTitle}</Text>
    </View>
    </Pressable>
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