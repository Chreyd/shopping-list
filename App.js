import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const [count, setCount] = useState(0);
//   const [count, setCount] = useState([]);

  useEffect(() => {
/*     if (count > 3) {
      setMyProducts([]);
    } */
   
    count>3? (setMyProducts([])): ""
    console.log(count)
  }, [count])

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    product.length > 1
      ? setMyProducts((currentMyProducts) => [
          { key: idString, name: product },
          ...currentMyProducts,
        ])
      : Alert.alert(
          "Désolé",
          "Article non valide",
          [
            {
              text: "Compris",
              onPress: () => setCount(count + 1),
              style: "destructive",
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {
              console.log("OK onDismiss");
            },
          }
        );
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />
      <FlatList
        data={myProducts}
        renderItem={({ item }) => (
          <Products
            name={item.name}
            deleteProduct={deleteProduct}
            keyProduct={item.key}
          />
        )}
      />
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
