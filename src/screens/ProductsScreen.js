import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import products from "../data/products";

const ProductsScreen = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details")}
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
