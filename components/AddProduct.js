import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";
import BodyText from "./BodyText";
import AppStyles from "../constants/AppStyles";
import TitleText from "./TitleText"

export default function AddProduct(props) {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {

    const regex= /[^a-z]/gi;
    // const regex= /[^0-9]/gi;
    setProduct(val.replace(regex, ''));
    // setProduct(val);

  };

  const handleClick = () => {
    props.submitHandler(product);
    setProduct("");
    // props.setDisplayModal(false);
  };

  return (
    <Modal visible={props.displayModal} animationType="slide">
      <View style={styles.inputContainer}>

      <TitleText style={AppStyles.headerTwo} >Veuillez indiquer un produit</TitleText>
      <BodyText >You can import any font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.</BodyText>

        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau Produit"
          // onChangeHandler={(e)=>inputHandler(e)}
          onChangeHandler={inputHandler}
          inputValue={product}
          // maxLength={10}
          // keyboardType='number-pad'

        />
        <View style={styles.btnContainer}>
          <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>
            Valider
          </ButtonComponent>
          <ButtonComponent
            onPressHandler={() => props.cancelNewProduct()}
            style={styles.btnTomato}
          >
            Annuler
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    // marginVertical: 10,
    // backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  textInput: {
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 30,
    height: 50,
    marginBottom: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBlue: {
    backgroundColor: "seagreen",
    width: 150,
    borderRadius: 6,
  },
  btnTomato: {
    backgroundColor: "tomato",
    width: 150,
    borderRadius: 6,
  },
});
