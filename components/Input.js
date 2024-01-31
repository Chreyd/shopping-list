import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Color from "../constants/colors";

const Input = (props) => {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      placeholder={props.textPlaceholder}
      onChangeText={props.onChangeHandler}
      value={props.inputValue}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: Color.secondary,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
  },
});
