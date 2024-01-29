import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React from "react";
import TrashCan from "./TrashCan";

export default function Products(props) {
  return (
    <View style={styles.products} >
      <View style={styles.items}>
        <Text style={styles.element}>{props.name}</Text>
      </View>
      <Pressable onPress={() => props.deleteProduct(props.keyProduct)}>
        <View>
          <TrashCan />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    products:{
        flexDirection: 'row',
        alignItems: 'center'
    },
  items: {
    marginVertical: 5,
    flexGrow:1
  },
  element: {
    backgroundColor: "mediumseagreen",
    marginVertical: 5,
    padding: 20,
    fontSize: 17,
    marginRight: 5,
    color:'#fff'
  },

});
