import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

export default function Products(props) {
  /* 
    TouchableWithoutFeedback ne peut pas être stylisé et est souvent utilisé pour 
    appliquer un onpress... afin d'exécuter un évenement sur l'élément sur lequel on clique
    */
  return (
    <TouchableWithoutFeedback onPress={() => console.log("first")}>
      <View style={styles.items}>
        <Text style={styles.element}>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
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
