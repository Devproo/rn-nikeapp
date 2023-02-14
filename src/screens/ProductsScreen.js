import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("Product Details");
          }}
          style={{ width: "50%", padding: 1 }}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;
