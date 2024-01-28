import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Modal, Text } from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    product.length > 1
      ? setMyProducts((currentMyProducts) => [
          { key: idString, name: product },
          ...currentMyProducts,
        ])
      : setShowModal(true);
  };

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text>Hello</Text>
            </View>
          </View>
        </View>
      </Modal>

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    height: 250,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader:{
    // backgroundColor: "green",
    width: '100%',
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth : 1,
    borderBottomColor: 'lightgray'
  }
});
