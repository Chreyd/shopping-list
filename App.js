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

export default function App() {
  const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => {
    setProduct(val);
  };

  const submitHandler = () => {
    const idString=Date.now().toString();
    product
      ? setMyProducts((currentMyProducts) => [{key: idString, name: product},...currentMyProducts])
      : "";
    setProduct("");
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
      <FlatList
        data={myProducts}
        renderItem={({ item }) => 
          <Text style={styles.element}>{item.name}</Text>
        }
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
  items: {
    marginVertical: 10,
  },
  element: {
    backgroundColor: "#ffb6c1",
    marginVertical: 5,
    padding: 20,
    fontSize: 17,
  },
});
