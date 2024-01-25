import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [product, setProduct] = useState("");
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => {
    setProduct(val);
  };

  const submitHandler = () => {
    console.log(product);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau Produit"
          // onChangeText={(e)=>inputHandler(e)}
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="Valider" onPress={submitHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: "row",
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
