import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Modal,
  Text,
  Pressable,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import DismissKeyboard from "./components/DismissKeyboard";

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

  /* animationType: fade ou slide */

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>OUPS!</Text>
              </View>
              <View style={styles.modalBody}>
                <Text style={styles.modalBodyText}>
                  Merci d'indiquer plus d'un caractère
                </Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable
                  style={styles.pressableBtnModal}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalBtnText}>OK</Text>
                </Pressable>
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
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1
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
  modalHeader: {
    // backgroundColor: "green",
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  modalHeaderText: {
    color: "grey",
  },
  modalBody: {
    // backgroundColor:'red',
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  modalBodyText: {
    fontSize: 17,
    // color: "grey",
  },
  modalFooter: {
    width: "100%",
  },
  pressableBtnModal: {
    // padding: 10,
    backgroundColor: "lightseagreen",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    // alignItems:'center'
  },
  modalBtnText: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    padding: 16,
  },
});
