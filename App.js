import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  console.log(myProducts);



  const submitHandler = (product, setProduct) => {
    const idString = Date.now().toString();
    product
      ? setMyProducts((currentMyProducts) => [
          { key: idString, name: product },
          ...currentMyProducts,
        ])
      : "";
    setProduct("");

/*     setMyProducts((currentMyProducts) => [
      { key: idString, name: product },
      ...currentMyProducts,
    ])
    setProduct("");
    */
  };
  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />
      <FlatList
        data={myProducts}
        renderItem={({ item }) => <Products name={item.name} />}
      />
      {/*       <ScrollView>
        <View style={styles.items}>
          {myProducts.map((item, index) => (
            <Text style={styles.element} key={index}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView> */}
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
