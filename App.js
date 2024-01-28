import React, { useState } from "react";
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

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    product.length > 1
      ? setMyProducts((currentMyProducts) => [
          { key: idString, name: product },
          ...currentMyProducts,
        ])
      : Alert.alert("Désolé", "Article non valide", [
          {
            text: "Compris",
            onPress: () => console.log("Alerte validé"),
            style: "destructive",
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "default",
          },
        ],
        {
          cancelable: true,
          onDismiss:()=>{console.log("OK onDismiss")}
        }
        );
  };

  /* 
  ****************************
  *  L'interface Alert       *    
  * **************************
  
  export interface AlertStatic {
  alert: (
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
  ) => void;
  prompt: (
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertButton[],
    type?: AlertType,
    defaultValue?: string,
    keyboardType?: string,
    options?: AlertOptions,
  ) => void;
}*/

  /*    Alert.alert(
     'Alert Title',
     'My Alert Msg',
     [
       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: () => console.log('OK Pressed')},
     ]
   ); */

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
