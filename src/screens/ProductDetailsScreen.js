import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const { width } = useWindowDimensions();
  const product = products[0];
  const addToCart = () => {
    console.warn("Add to cart");
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 34, fontWeight: "500", marginVertical: 10 }}>
            {product.name}
          </Text>
          <Text style={{ ontWeight: "500", fontSize: 16, letterSpacing: 1.5 }}>
            {product.price}
          </Text>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 18,
              lineHeight: 30,
              fontWeight: "300",
            }}
          >
            {product.description}
          </Text>
        </View>
      </ScrollView>
      <Pressable
        onPress={addToCart}
        style={{
          position: "absolute",
          backgroundColor: "black",
          bottom: 30,
          width: "90%",
          alignSelf: "center",
          padding: 20,
          borderRadius: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500", fontSize: 16 }}>
          Addto cart
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;
