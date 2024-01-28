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

export default function Products(props) {
  return (
    <Pressable
        // onLongPress={() => console.log(props.name)}
      onPress={() => console.log(props.name)}
/*       style={({pressed}) => [
        {
          backgroundColor: pressed ? "red" : "blue",
        },
      ]} */
      android_ripple={{color: "#00F"}}
    //   delayLongPress={2000}
    >
      <View style={styles.items}>
        <Text style={styles.element}>{props.name}</Text>
      </View>
    </Pressable>
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
