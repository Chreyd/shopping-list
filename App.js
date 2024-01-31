import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Modal,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [displayModal, setDisplayModal] = useState(false);

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };

  const submitHandler = (product) => {
    const idString = Date.now().toString();

    setDisplayModal(false);

    /*     product.length > 1
      ? setMyProducts((currentMyProducts) => [
          { key: idString, name: product },
          ...currentMyProducts,
        ])
      : setShowModal(true); */

    if (product.length > 1) {
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
    } else {
      setShowModal(true);
    }
  };

  /* animationType: fade ou slide */

  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: "https://cdn.pixabay.com/photo/2023/01/04/13/45/flowers-7696757_640.png",
        }}
        // source={require('./assets/flower-7829456_1920.png')}
      >
        <Header />
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
                  {/* <Image source={require("./assets/red-check-128px.png")} style={styles.redCheck}/> */}
                  <Image
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146072_640.png",
                    }}
                    style={styles.redCheck}
                  />
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

          {/* <Button title="Nouveau Produit" onPress={() => setDisplayModal(true)} /> */}
          <ButtonComponent
            onPressHandler={() => setDisplayModal(true)}
            style={styles.addProductBtn}
          >
            Nouveau Produit
          </ButtonComponent>
          <AddProduct
            submitHandler={submitHandler}
            displayModal={displayModal}
            cancelNewProduct={cancelNewProduct}
          />
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
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
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
    height: 270,
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
  redCheck: {
    width: 100,
    height: 100,
  },
  addProductBtn: {
    backgroundColor: "#7b1f04",
    padding: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  bgImage: {
    flex: 1,
  },
});
