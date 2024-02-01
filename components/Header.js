import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TitleText from "./TitleText";
import Colors from "../constants/colors";

export default function Header() {
  return (
    <View style={styles.headerWrapper}>
      {/* <Text style={styles.logo}>My Shopping List</Text> */}
      <TitleText style={styles.logo}>My Shopping List</TitleText>
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
    color: Colors.white,
    fontSize: 30,
    padding: 9,
    // fontWeight: "bold",
    // fontFamily: 'inter-regular',
    // fontFamily: 'Pacifico-Regular',
    fontFamily: 'Bangers_400Regular',
  }
});
