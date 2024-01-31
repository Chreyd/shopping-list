import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";

export default function AddProduct(props) {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    props.submitHandler(product);
    setProduct("");
    // props.setDisplayModal(false);
  };

  return (
    <Modal visible={props.displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau Produit"
          // onChangeHandler={(e)=>inputHandler(e)}
          onChangeHandler={inputHandler}
          inputValue={product}
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
