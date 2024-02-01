import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.logo}>My Shopping List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "darkred",
    justifyContent: "center",
    alignItems: "center",
    // height: 60,
    paddingTop: 25,
    paddingBottom: 15,
  },
  logo:{
    color:"#fff",
    fontSize: 30,
    padding: 9,
    // fontWeight: "bold",
    // fontFamily: 'inter-regular',
    // fontFamily: 'Pacifico-Regular',
    fontFamily: 'Bangers_400Regular',
  }
});
