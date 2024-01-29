import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";

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

  /* 
      pour cette vidéo
  multiline | maxLength | secureTextEntry | editable :dans TextInput

*/

  return (
    <Modal visible={props.displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau Produit"
          // onChangeText={(e)=>inputHandler(e)}
          onChangeText={inputHandler}
          value={product}
          // multiline
          // maxLength={9}
          // secureTextEntry
          // editable={false}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnBlue}>
            <Button title="Valider" onPress={handleClick} />
          </View>
          <View style={styles.btnTomato}>
            <Button
              title="Annuler"
              onPress={() => props.cancelNewProduct()}
              color="tomato"
            />
          </View>
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
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    // flexGrow: 1,
    marginBottom: 9,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBlue:{
    width: '45%'
  },
  btnTomato:{
    width: '45%'
  },
});
