import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

export default function Products(props) {
  return (
    <View style={styles.items}>
      <Text style={styles.element}>{props.name}</Text>
    </View>
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
