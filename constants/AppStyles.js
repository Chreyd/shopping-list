import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  headerOne: {
    fontFamily: "BangersRegular",
    color: colors.info,
    fontSize: 30,
    padding: 9,
    // fontFamily: "inter-regular",
    // fontFamily: "Pacifico-Regular",
  },
  headerTwo: {
    fontFamily: "BangersRegular",
    color: colors.danger,
    fontSize: 25,
    padding: 9,
    textAlign: "center",
  },
  textBody:{
    color: colors.secondary,
    fontSize: 15,
  }
});
