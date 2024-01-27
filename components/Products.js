import { StyleSheet, Text, TouchableWithoutFeedback, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Products(props) {

  return (
    <TouchableOpacity onPress={() => console.log(props.name)} activeOpacity={0.8}>
      <View style={styles.items}>
        <Text style={styles.element}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  items: {
    marginVertical: 5,
  },
  element: {
    backgroundColor: "#ffb6c1",
    marginVertical: 5,
    padding: 20,
    fontSize: 17,
  },
});
