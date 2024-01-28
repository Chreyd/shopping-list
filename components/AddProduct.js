import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";

export default function AddProduct(props) {
  const [product, setProduct] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    product.length > 1 ? setBtnDisable(false) : setBtnDisable(true);
  }, [product]);

  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    props.submitHandler(product);
    setProduct("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau Produit"
          // onChangeText={(e)=>inputHandler(e)}
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="Valider" onPress={handleClick} disabled={btnDisable} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
  },
});
