import { Text } from "react-native";
import React from "react";
import AppStyles from "../constants/AppStyles";

const { textBody } = AppStyles;

const BodyText = (props) => {
  return (
      <Text style={{...textBody,...props.style}}>{props.children}</Text>
  );
};

export default BodyText;
